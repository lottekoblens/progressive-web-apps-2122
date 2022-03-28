import { detect } from './barcode.js';

// Search for product with the value the user puts in the input field
export const errorState = (data) => {
  const submitButton = document.querySelector('input[type="button"]');
  const invalidBarcode = document.getElementById('invalid_code');
  let inputValue = document.getElementById('searchField');
  const link = document.getElementById('again');
  const popup = document.getElementById('popup');

  popup.classList.remove('hidden');

  submitButton.addEventListener('click', () => {
    window.location.hash = inputValue.value;
    if (data.code === null || data.status_verbose === 'product not found') {
      invalidBarcode.classList.remove('hidden');
    } else {
      invalidBarcode.classList.add('hidden');
    }
  });
  link.addEventListener('click', () => {
    popup.classList.add('hidden');
    detect();
  });
};

export const stopErrorState = () => {
  const popup = document.getElementById('popup');
  popup.classList.add('hidden');
};

export const deleteInvalidText = () => {
  // the text of product not found should be deleted after product was found
  const invalidBarcode = document.getElementById('invalid_code');
  if (invalidBarcode.className !== 'hidden') {
    invalidBarcode.classList.add('hidden');
  }
};
