// LocalStorage
const localInput = document.getElementById('local-input');
const localSaveButton = document.getElementById('local-save');
const localClearButton = document.getElementById('local-clear');
const localOutput = document.getElementById('local-output');

localSaveButton.addEventListener('click', () => {
    const text = localInput.value;
    localStorage.setItem('localText', text);
    localOutput.textContent = `Saved to LocalStorage: ${text}`;
});

localClearButton.addEventListener('click', () => {
    localStorage.removeItem('localText');
    localInput.value = '';
    localOutput.textContent = 'LocalStorage cleared.';
});

window.addEventListener('load', () => {
    const savedText = localStorage.getItem('localText');
    if (savedText) {
        localOutput.textContent = `Loaded from LocalStorage: ${savedText}`;
    }
});

// SessionStorage
const sessionInput = document.getElementById('session-input');
const sessionSaveButton = document.getElementById('session-save');
const sessionClearButton = document.getElementById('session-clear');
const sessionOutput = document.getElementById('session-output');

sessionSaveButton.addEventListener('click', () => {
    const text = sessionInput.value;
    sessionStorage.setItem('sessionText', text);
    sessionOutput.textContent = `Saved to SessionStorage: ${text}`;
});

sessionClearButton.addEventListener('click', () => {
    sessionStorage.removeItem('sessionText');
    sessionInput.value = '';
    sessionOutput.textContent = 'SessionStorage cleared.';
});

window.addEventListener('load', () => {
    const savedText = sessionStorage.getItem('sessionText');
    if (savedText) {
        sessionOutput.textContent = `Loaded from SessionStorage: ${savedText}`;
    }
});
