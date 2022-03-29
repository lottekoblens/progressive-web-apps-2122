// const CORE = 'core-cache';
// const CORE_FILES = [
//     '/styles/style.css',
//     '/main.js'
// ]

// self.addEventListener('install', function (event) {
//     event.waitUntil(
//         caches.open(CORE).then(function (cache) {
//             return cache.addAll(CORE_FILES);
//         })
//     )
//     console.log("[serviceWorker] is installed");
// })

// self.addEventListener('activate', function (event) {
//     console.log("[serviceWorker] Activated");
// })

// self.addEventListener('fetch', function (event) {
//     console.log('hoi')
//     event.respondWith(
//         caches.open(CORE).then(function (cache) {
//             return cache.match(event.request).then(function (response) {
//                 return response || fetch(event.request).then(function (response) {
//                     cache.put(event.request, response.clone());
//                     return response;
//                 });
//             });
//         })
//     );
// });


const CORE_CACHE_VERSION = 'v2'
const CORE_ASSETS = [
    '/styles/style.css',
    '/main.js',
    '/offline'
]

self.addEventListener('install', event => {
    console.log('Installing service worker')

    event.waitUntil(
        caches.open(CORE_CACHE_VERSION).then(function (cache) {
            return cache.addAll(CORE_ASSETS).then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', event => {
    console.log('Activating service worker')
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
    console.log('Fetch event: ', event.request.url);
    if (isCoreGetRequest(event.request)) {
        console.log('Core get request: ', event.request.url);
        // cache only strategy
        event.respondWith(
            caches.open(CORE_CACHE_VERSION)
            .then(cache => cache.match(event.request.url))
        )
    } else if (isHtmlGetRequest(event.request)) {
        console.log('html get request', event.request.url)
        // generic fallback
        event.respondWith(

            caches.open('html-cache')
            .then(cache => cache.match(event.request.url))
            .then(response => response ? response : fetchAndCache(event.request, 'html-cache'))
            .catch(e => {
                return caches.open(CORE_CACHE_VERSION)
                    .then(cache => cache.match('/offline'))
            })
        )
    }
});

function fetchAndCache(request, cacheName) {
    return fetch(request)
        .then(response => {
            if (!response.ok) {
                throw new TypeError('Bad response status');
            }

            const clone = response.clone()
            caches.open(cacheName).then((cache) => cache.put(request, clone))
            return response
        })
}


function isHtmlGetRequest(request) {
    return request.method === 'GET' && (request.headers.get('accept') !== null && request.headers.get('accept').indexOf('text/html') > -1);
}


function isCoreGetRequest(request) {
    return request.method === 'GET' && CORE_ASSETS.includes(getPathName(request.url));
}

function getPathName(requestUrl) {
    const url = new URL(requestUrl);
    return url.pathname;
}