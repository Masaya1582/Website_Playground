const generateButton = document.getElementById('generate-button');
const passwordElement = document.getElementById('password');
const lengthInput = document.getElementById('length');

generateButton.addEventListener('click', generatePassword);

function generatePassword() {
  const length = parseInt(lengthInput.value);
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  passwordElement.textContent = password;
}
