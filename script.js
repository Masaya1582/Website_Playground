// script.js
let timerInterval;
let time = 0;
let running = false;

const display = document.getElementById('display');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function updateDisplay() {
  const hours = Math.floor(time / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${seconds}`;
}

startButton.addEventListener('click', () => {
  if (!running) {
    timerInterval = setInterval(() => {
      time++;
      updateDisplay();
    }, 1000);
    running = true;
  }
});

stopButton.addEventListener('click', () => {
  if (running) {
    clearInterval(timerInterval);
    running = false;
  }
});

resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  time = 0;
  running = false;
  updateDisplay();
});
