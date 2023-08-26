// script.js
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsBody = document.getElementById('resultsBody');

const data = [
    { name: 'John Doe', email: 'john@example.com', age: 30 },
    { name: 'Jane Smith', email: 'jane@example.com', age: 28 },
    { name: 'Michael Johnson', email: 'michael@example.com', age: 35 },
    { name: 'Emily Williams', email: 'emily@example.com', age: 24 },
    { name: 'Robert Brown', email: 'robert@example.com', age: 42 },
    { name: 'Sophia Davis', email: 'sophia@example.com', age: 29 },
    { name: 'William Martinez', email: 'william@example.com', age: 31 },
    { name: 'Olivia Wilson', email: 'olivia@example.com', age: 26 },
    { name: 'James Anderson', email: 'james@example.com', age: 39 },
    { name: 'Isabella Harris', email: 'isabella@example.com', age: 22 },
    { name: 'Ethan Jackson', email: 'ethan@example.com', age: 27 },
    { name: 'Ava White', email: 'ava@example.com', age: 33 },
    { name: 'Liam Thompson', email: 'liam@example.com', age: 34 },
    { name: 'Mia Garcia', email: 'mia@example.com', age: 25 },
    { name: 'Noah Lopez', email: 'noah@example.com', age: 29 },
    { name: 'Emma Lee', email: 'emma@example.com', age: 31 },
    { name: 'Lucas Walker', email: 'lucas@example.com', age: 23 },
    { name: 'Avery Turner', email: 'avery@example.com', age: 37 },
    { name: 'Lily Mitchell', email: 'lily@example.com', age: 28 },
    { name: 'Logan Perez', email: 'logan@example.com', age: 32 }
  ];  

function displayResults(results) {
  resultsBody.innerHTML = '';
  results.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>${item.age}</td>
    `;
    resultsBody.appendChild(row);
  });
}

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredResults = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm) ||
    item.email.toLowerCase().includes(searchTerm) ||
    item.age.toString().includes(searchTerm)
  );
  displayResults(filteredResults);
});
