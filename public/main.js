import {
    detect
} from "./scripts/barcode.js";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js')
            .then(function (registration) {
                return registration.update();
            })
    });
}

if (window.location.pathname === '/scan') {
    detect()
}