const CACHE_VERSION = 'v3'
const CACHE_FILES = [
    '/styles/style.css',
    '/main.js',
    '/offline',
    '/images/background.jpeg'
]

self.addEventListener('install', event => {
    console.log('Installing service worker')

    event.waitUntil(
        caches.open(CACHE_VERSION).then((cache) => {
            return cache.addAll(CACHE_FILES).then(() => self.skipWaiting());
            // with self.skipWaiting we make sure that with an update of the serviceWorker the newest version is used
        })
    );
});

self.addEventListener('activate', event => {
    console.log('Activating service worker')
});

self.addEventListener('fetch', event => {
    console.log('Fetch event: ', event.request.url);
    if (isCoreGetRequest(event.request)) {
        console.log('Core get request: ', event.request.url);
        // open cache version and check if event.request.url has a match
        // if there is a match, then it will be returned
        // this is for the css and js files and for the background image
        event.respondWith(
            caches.open(CACHE_VERSION)
            .then(cache => cache.match(event.request.url))
        )
    }
    if (isHtmlGetRequest(event.request)) {
        if (!isBarcodeOrSearchPage(event.request)) {
            event.respondWith(
                caches.open('html_cache')
                .then(cache => cache.match(event.request.url))
                .then(response => response ? response : fetchAndCache(event.request))
                .catch(e => {
                    return caches.open(CACHE)
                        .then(cache => cache.match('/offline'))
                })
            )
        }
    }
});

const fetchAndCache = (request) => {
    return fetch(request)
        .then(response => {
            // if (!response.ok) {
            //     throw new TypeError('Bad response status');
            // }

            const clone = response.clone()
            caches.open('html_cache').then((cache) => {
                if (response.type === 'basic') {
                    cache.put(request, clone)
                }
            })
            return response
        })
}


// HELPERS

const isHtmlGetRequest = (request) => {
    return request.method === 'GET' && (request.headers.get('accept') !== null && request.headers.get('accept').includes('text/html'));
}


const isCoreGetRequest = (request) => {
    return request.method === 'GET' && CACHE_FILES.includes(getPathName(request.url));
    // only return the files that are in the CACHE_FILES
}

const getPathName = (requestUrl) => {
    const url = new URL(requestUrl);
    return url.pathname;
}

const isBarcodeOrSearchPage = (request) => {
    return getPathName(request.url) === '/scan' || getPathName(request.url) === '/search'
}