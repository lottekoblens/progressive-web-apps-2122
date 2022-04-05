const CACHE_VERSION = 'v3'
const HTML_CACHE = 'v1_html'
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

self.addEventListener('fetch', (event) => {
    if (isHtmlGetRequest(event.request)) {
        if (!isBarcodePage(event.request)) {
            event.respondWith(
                caches.open(HTML_CACHE)
                .then(cache => cache.match(event.request.url))
                .then(response => response ? response : fetchAndCache(event.request))
                .catch(e => {
                    return caches.open(CACHE_VERSION)
                        .then(cache => cache.match('/offline'))
                })
            )
        } else {
            event.respondWith(
                fetch(event.request)
                .catch(e => {
                    return caches.open(CACHE_VERSION)
                        .then(cache => cache.match('/offline'))
                })
            )
        }
    } else if (isCoreGetRequest(event.request)) {
        event.respondWith(
            caches.open(CACHE_VERSION)
            .then(cache => cache.match(event.request.url))
        )
    }
});

const fetchAndCache = (request) => {
    return fetch(request)
        .then(response => {
            // if (!response.ok) {
            //     throw new TypeError('Bad response status');
            // }

            const clone = response.clone()
            caches.open(HTML_CACHE).then((cache) => {
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

const isBarcodePage = (request) => {
    return getPathName(request.url) === '/scan'
}