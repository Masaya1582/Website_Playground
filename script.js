const showAlertButton = document.getElementById('show-alert-button');
const alertOverlay = document.getElementById('alert-overlay');
const textField = document.getElementById('text-field');
const alertButton = document.getElementById('alert-button');

showAlertButton.addEventListener('click', openAlert);
alertButton.addEventListener('click', closeAlert);

function openAlert() {
  alertOverlay.style.display = 'flex';
}

function closeAlert() {
  alertOverlay.style.display = 'none';
}
