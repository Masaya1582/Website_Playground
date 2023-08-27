const searchButton = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const movieDetails = document.getElementById('movie-details');

const apiKey = 'f8a4e52d';

searchButton.addEventListener('click', searchMovie);

async function searchMovie() {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
        const data = await response.json();
        displayMovieDetails(data);
    }
}

function displayMovieDetails(movie) {
    if (movie.Response === 'True') {
        movieDetails.innerHTML = `
            <h2>${movie.Title}</h2>
            <img src="${movie.Poster}" alt="${movie.Title} Poster">
            <p>Year: ${movie.Year}</p>
            <p>Genre: ${movie.Genre}</p>
            <p>Plot: ${movie.Plot}</p>
        `;
    } else {
        movieDetails.innerHTML = '<p>Movie not found</p>';
    }
}
