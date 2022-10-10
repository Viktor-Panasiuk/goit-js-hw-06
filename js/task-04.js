let counterValue = 0;

const updateValue = (element, value) => {
    element.textContent = value;
}

const spanRef = document.querySelector('#value');
const buttomIncrement = document.querySelector('[data-action="increment"]');
const buttomDecrement = document.querySelector('[data-action="decrement"]');

updateValue(spanRef, counterValue);

buttomIncrement.addEventListener('click', () => {
    counterValue += 1;
    updateValue(spanRef, counterValue);
});

buttomDecrement.addEventListener('click', () => {
    counterValue -= 1;
    updateValue(spanRef, counterValue);
});