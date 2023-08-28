const openModalButton = document.getElementById('open-modal-button');
const closeModalButton = document.getElementById('close-modal-button');
const halfModal = document.getElementById('half-modal');

openModalButton.addEventListener('click', openHalfModal);
closeModalButton.addEventListener('click', closeHalfModal);

function openHalfModal() {
  halfModal.style.bottom = '0';
}

function closeHalfModal() {
  halfModal.style.bottom = '-50%';
}
