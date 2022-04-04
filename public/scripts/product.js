export const showProduct = (data) => {
  const h2 = document.querySelector('h2');
  const img = document.getElementById('product-image');
  const h3Ingredients = document.querySelector('h3:nth-of-type(1)');
  const h3Allergies = document.querySelector('h3:nth-of-type(2)');
  const ulAllergies = document.querySelector('ul:nth-of-type(2)');
  const ulIngredients = document.querySelector('ul:nth-of-type(1)');
  const result = document.getElementById('result');

  result.classList.remove('moveToTop');
  result.scrollIntoView({
    block: 'center',
    behavior: 'smooth'
  });

  // product name
  if (data.product.product_name) {
    h2.innerHTML = data.product.product_name;
  } else {
    h2.innerHTML = 'No productname found';
  }

  // image of product
  if (data.product.image_url) {
    img.src = data.product.image_url;
  } else {
    img.src = '';
  }

  // ingredients of product
  if (data.product.ingredients_text_en) {
    h3Ingredients.innerHTML = 'Ingredients:';
    const ingredients = data.product.ingredients_text_en;
    const ingredientsArray = ingredients.split(',');
    ulIngredients.innerHTML = '';
    ingredientsArray.forEach((ingredients) => {
      let listItemIngredient = document.createElement('li');
      if (ingredients !== '') {
        listItemIngredient.innerHTML = '-' + ingredients;
        ulIngredients.appendChild(listItemIngredient);
      }
    });
  } else {
    h3Ingredients.innerHTML = 'No ingredients known';
  }

  // allergies of product
  if (data.product.allergens_imported) {
    h3Allergies.innerHTML = 'Allergies:';
    const allergies = data.product.allergens_imported;
    const allergiesArray = allergies.split(',');
    ulAllergies.innerHTML = '';
    allergiesArray.forEach((allergy) => {
      let listItemAllergy = document.createElement('li');
      if (allergy !== '') {
        listItemAllergy.innerHTML = '-' + allergy;
        ulAllergies.appendChild(listItemAllergy);
      }
    });
  } else {
    h3Allergies.innerHTML = 'No allergies known';
  }
};