const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onSubmit);

function onSubmit(event) { 
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;


    if (!((email) && (password))) {
        alert('Не всі поля заповнені!');
        return;
    };

    console.log({ email, password });
    event.currentTarget.reset();
};