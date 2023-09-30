// script.js
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    const resultsDiv = document.getElementById("results");

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value;
        if (searchTerm.trim() === "") {
            alert("Please enter a movie title.");
            return;
        }

        // Replace 'YOUR_API_KEY' with your actual OMDB API key
        const apiKey = "f8a4e52d";
        const apiUrl = `https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.Response === "True") {
                    displayResults(data.Search);
                } else {
                    resultsDiv.innerHTML = `<p>No results found for "${searchTerm}"</p>`;
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    });

    function displayResults(movies) {
        let html = "";
        movies.forEach((movie) => {
            html += `
                <div class="movie">
                    <h2>${movie.Title}</h2>
                    <p>Year: ${movie.Year}</p>
                    <p>Type: ${movie.Type}</p>
                    <p>IMDB ID: ${movie.imdbID}</p>
                    <img src="${movie.Poster}" alt="${movie.Title} Poster" />
                </div>
            `;
        });
        resultsDiv.innerHTML = html;
    }
});
