const openDrawerButton = document.getElementById('openDrawerButton');
const closeDrawerButton = document.getElementById('closeDrawerButton');
const drawer = document.getElementById('drawer');

openDrawerButton.addEventListener('click', () => {
  drawer.style.left = '0';
});

closeDrawerButton.addEventListener('click', () => {
  drawer.style.left = '-250px';
});
