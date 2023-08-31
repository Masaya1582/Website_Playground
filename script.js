const openModalBtn = document.getElementById('openModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});
