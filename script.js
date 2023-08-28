const statusElement = document.getElementById('status');

function updateNetworkStatus() {
  if (navigator.onLine) {
    statusElement.textContent = 'You are online.';
    statusElement.style.color = 'green';
  } else {
    statusElement.textContent = 'You are offline.';
    statusElement.style.color = 'red';
  }
}

updateNetworkStatus();

window.addEventListener('online', updateNetworkStatus);
window.addEventListener('offline', updateNetworkStatus);
