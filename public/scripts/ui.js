import {
  detect
} from './barcode.js';

export const scanButton = () => {
  const button = document.getElementById('scan-button');
  const buttonContinue = document.getElementById('continue-button');
  button.addEventListener('click', detect); // call function detect when button start scanning is clicked
  buttonContinue.addEventListener('click', detect); // call function detect when button continue scanning is clicked
  button.addEventListener('click', function () {
    button.disabled = true;
    buttonContinue.disabled = true;
  });
  buttonContinue.addEventListener('click', function () {
    buttonContinue.disabled = true;
    button.disabled = true;
    const scan = document.getElementById('scan');
    scan.scrollIntoView(); // go to section of scan so that the area is in view
  });
};

export const loadingState = () => {
  const load = document.getElementById('loading');
  load.classList.add('loading-true'); // add class loading-true to show the loading icon
};

export const removeLoadingState = () => {
  const load = document.getElementById('loading');
  load.classList.remove('loading-true'); // remove class loading-true to delete the loading icon
};

export const emptyContent = () => {
  const h2 = document.querySelector('h2');
  const img = document.getElementById('product-image');
  const h3Ingredients = document.querySelector('h3:nth-of-type(1)');
  const h3Allergies = document.querySelector('h3:nth-of-type(2)');
  const ulAllergies = document.querySelector('ul:nth-of-type(2)');
  const ulIngredients = document.querySelector('ul:nth-of-type(1)');
  h2.innerHTML = '';
  img.src = '';
  h3Allergies.innerHTML = '';
  h3Ingredients.innerHTML = '';
  ulAllergies.innerHTML = '';
  ulIngredients.innerHTML = '';
};

export const activateButton = () => {
  const button = document.getElementById('scan-button');
  const buttonContinue = document.getElementById('continue-button');
  buttonContinue.disabled = false;
  button.disabled = false;
};

export const disableButton = () => {
  const button = document.getElementById('scan-button');
  const buttonContinue = document.getElementById('continue-button');
  buttonContinue.disabled = true;
  button.disabled = true;
};

export const resetForm = () => {
  const form = document.querySelector('form');
  form.reset(); // reset the form so the old input value is removed from the input field
};