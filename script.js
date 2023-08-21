const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', formatPhoneNumber);

function formatPhoneNumber() {
    let input = phoneInput.value.replace(/\D/g, ''); // Remove non-numeric characters
    const match = input.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        input = `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    phoneInput.value = input;
}
