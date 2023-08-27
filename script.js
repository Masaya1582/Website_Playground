const decrementButton = document.getElementById('decrement-btn');
const incrementButton = document.getElementById('increment-btn');
const resetButton = document.getElementById('reset-btn');
const countDisplay = document.getElementById('count');

let count = 0;

decrementButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCountDisplay();
    }
});

incrementButton.addEventListener('click', () => {
    count++;
    updateCountDisplay();
});

resetButton.addEventListener('click', () => {
    count = 0;
    updateCountDisplay();
});

function updateCountDisplay() {
    countDisplay.textContent = count;
}

updateCountDisplay();
