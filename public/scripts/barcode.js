// import {
//   fetchWithBarcode
// } from './fetch.js';
// import {
//   clearHash
// } from './router.js';
import {
  loadingState
} from './ui.js';
import {
  removeLoadingState
} from './ui.js';

export const detect = async () => {
  const scanLine = document.getElementById('redLine');
  let itemsFound = [];
  let barcodeValue;
  const video = document.createElement('video'); // create a html element video
  const divScan = document.getElementById('scan');


  const barcodeDetector = new BarcodeDetector();
  let mediaStream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: 'environment'
    }, // use the back camera of the phone
  });

  video.srcObject = mediaStream; // show the mediaStream in the video element

  loadingState();
  await video.play();
  removeLoadingState();
  scanLine.classList.remove('hidden');

  // when scan is performed again after error state launched, two video's are started
  // here I remove the second video
  const secondVideo = document.querySelector('video:last-of-type');
  if (secondVideo !== null) {
    secondVideo.remove();
  }

  divScan.append(video); // append the video element to the element with the id scan

  const render = () => {
    barcodeDetector
      .detect(video)
      // the detect() returns a Promise which fullfills with an Array of detected barcodes within an image
      .then((barcodes) => {
        barcodes.forEach((barcode) => {
          if (!itemsFound.includes(barcode.rawValue)) {
            itemsFound.push(barcode.rawValue);
            barcodeValue = barcode.rawValue; // rawValue is a string decoded from the barcode data
            video.pause();
            video.remove();
            window.location.href = '/product/' + barcodeValue; // put the barcodeValue in the window.location.href
            scanLine.classList.add('hidden');
          }
        });
      })
      .catch(console.error);
  };

  const renderLoop = () => {
    requestAnimationFrame(renderLoop); // call it once to kick it off, and then it keeps calling itself
    render();
  };
  renderLoop();
};

// export const renderProduct = (barcodeHash) => {
//   loadingState();
//   fetchWithBarcode(barcodeHash); // give barcodeHash to the function fetchWithBarcode and run that function
// };

// source barcode scanner: https://daily-dev-tips.com/posts/detecting-barcodes-from-the-webcam/