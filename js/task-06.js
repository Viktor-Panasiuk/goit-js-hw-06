
const onInputText = ({ currentTarget }) => { 
    const dataLenght = Number(currentTarget.dataset.length);
    
    currentTarget.classList.remove('valid');
    currentTarget.classList.remove('invalid');
    currentTarget.classList.add((currentTarget.value.length === dataLenght) ? 'valid' : 'invalid');
};

const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onInputText);
