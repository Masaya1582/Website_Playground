const progressBar = document.getElementById("progressBar");

let width = 0;
const interval = setInterval(() => {
  if (width >= 100) {
    clearInterval(interval);
  } else {
    width += 1;
    progressBar.style.width = `${width}%`;
  }
}, 50);
