const spanRef = document.querySelector('#name-output');
const inputRef = document.querySelector('#name-input');

function updateSpan({ currentTarget }) {
    spanRef.textContent = currentTarget.value.length ? currentTarget.value : 'Anonymous';
};

inputRef.addEventListener('input', updateSpan);