// script.js
const fetchButton = document.getElementById('fetchButton');
const userImage = document.getElementById('userImage');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');

fetchButton.addEventListener('click', fetchRandomUser);

function fetchRandomUser() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      const imageUrl = user.picture.large;
      const name = `${user.name.first} ${user.name.last}`;
      const email = user.email;

      userImage.src = imageUrl;
      userName.textContent = name;
      userEmail.textContent = email;
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
}
