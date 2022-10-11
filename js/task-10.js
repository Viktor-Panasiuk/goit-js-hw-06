
const inputNumberRef = document.querySelector('input[type="number"]');
const buttonCreateRef = document.querySelector('button[data-create]');
const buttonDestroyRef = document.querySelector('button[data-destroy]');
const divBoxesRef = document.querySelector('#boxes');

buttonCreateRef.addEventListener('click', onButtonCreateClick);
buttonDestroyRef.addEventListener('click', onButtonDestroyClick);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


const createBoxes = (amount) => {
  let size = 30;
  const boxesArray = [];

  while (amount > 0) {
    const element = document.createElement('div');

    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = getRandomHexColor();
    boxesArray.push(element);

    size += 10;
    amount -= 1;
  };
  return boxesArray;
};

const destroyBoxes = () => {
  divBoxesRef.innerHTML = '';
};

function onButtonCreateClick() {
  const value = Number(inputNumberRef.value);

  if (value) {
    divBoxesRef.append(...createBoxes(value));
  };
};

function onButtonDestroyClick() {
  destroyBoxes();
};




