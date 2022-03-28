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

// if (!('serviceWorker' in navigator)) {
//   console.log('sw not supported');
//   return;
// }
// navigator.serviceWorker.register('/service-worker.js')
// .then(function(registration){
//   console.log('SW registered, scope is:', registration.scope)
// })

if (window.location.pathname === '/scan') {
    detect()
    // barcodeDetector()
}