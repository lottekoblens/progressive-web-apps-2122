import { showProduct } from './product.js';
import { errorState, stopErrorState } from './error.js';
import { activateButton, disableButton, emptyContent, resetForm } from './ui.js';
import { removeLoadingState } from './ui.js';

export const fetchWithBarcode = (barcodeValue) => {
  let barcode = barcodeValue;

  const cors = 'https://world.openfoodfacts.org/';
  const endpoint = 'api/v0/product/';
  const filetype = '.json';
  const url = `${cors}${endpoint}${barcode}${filetype}`;
  // https://world.openfoodfacts.org/api/v0/product/'${barcode}.json
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.status_verbose === 'product not found' || data.status_verbose === 'no code or invalid code' || data.code === null) {
        // error state if product is not found
        removeLoadingState();
        errorState(data);
        emptyContent();
        disableButton();
      } else {
        removeLoadingState();
        stopErrorState();
        showProduct(data);
        activateButton();
        resetForm();
      }
    })
    .catch((err) => {
      // if something goes wrong, the error is displayed in the console
      console.error(err);
    });
};
