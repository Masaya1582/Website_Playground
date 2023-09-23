const jokeText = document.getElementById('joke-text');
const getJokeBtn = document.getElementById('get-joke-btn');

getJokeBtn.addEventListener('click', () => {
    getJoke();
});

async function getJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        jokeText.textContent = data.joke;
    } catch (error) {
        console.error('Error fetching joke:', error);
        jokeText.textContent = 'Oops! An error occurred.';
    }
}

getJoke(); // Fetch a joke when the page loads
