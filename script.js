// Function to fetch a list of users from a fake API
function fetchUsers(callback) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error:', error));
}

// Function to display the list of users
function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
    });
}

// Event listener for the "Fetch Users" button
const fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', () => {
    fetchButton.disabled = true;
    fetchButton.textContent = 'Fetching...';

    // Fetch and display users, using the callback
    fetchUsers(users => {
        displayUsers(users);
        fetchButton.disabled = false;
        fetchButton.textContent = 'Fetch Users';
    });
});
