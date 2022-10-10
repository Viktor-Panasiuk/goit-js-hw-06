const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = ingredients.map(ingredient => {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;
  liRef.classList.add('item');
  return liRef;
}
);

const ulRef = document.querySelector('#ingredients');
ulRef.append(...listRef);