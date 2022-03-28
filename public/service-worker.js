const CORE = 'core-cache';
const CORE_FILES = [
    '/styles/style.css',
    '/main.js'
]

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CORE).then(function (cache) {
            return cache.addAll(CORE_FILES);
        })
    )
    console.log("[serviceWorker] is installed");
})

self.addEventListener('activate', function (event) {
    console.log("[serviceWorker] Activated");
})

self.addEventListener('fetch', function (event) {
    console.log(event.request.url);
});