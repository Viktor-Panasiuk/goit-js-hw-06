function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');

buttonRef.addEventListener('click', onButtonClick);

function onButtonClick() {
  const color = getRandomHexColor();
  spanRef.textContent = color.toString();
  bodyRef.style.backgroundColor = color;
}