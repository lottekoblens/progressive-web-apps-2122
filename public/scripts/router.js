import {
  renderProduct
} from './barcode.js';
import './vendor/routie.min.js';

export const handleRoutes = () => {
  routie({
    ':id': (id) => {
      renderProduct(id);
    },
  });
};

export const clearHash = () => {
  window.location.hash = '';
};