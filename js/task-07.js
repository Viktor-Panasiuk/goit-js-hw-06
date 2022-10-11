const inputRangeRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

spanRef.style.fontSize = inputRangeRef.value + 'px';

const onInputRangeInput = ({ currentTarget }) => {
    spanRef.style.fontSize = currentTarget.value + 'px';
};

inputRangeRef.addEventListener('input', onInputRangeInput);