const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');

emailInput.addEventListener('input', validateInputs);
passwordInput.addEventListener('input', validateInputs);

function validateInputs() {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    
    if (emailValue !== '' && passwordValue !== '') {
        loginButton.removeAttribute('disabled');
    } else {
        loginButton.setAttribute('disabled', 'true');
    }
}
