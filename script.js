// Sample items for demonstration
const sampleItems = [
    "Apple",
    "Banana",
    "Cherry",
    "Grapes",
    "Orange",
    "Pineapple",
    "Strawberry",
];

// Function to perform search
function performSearch() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const searchResults = document.getElementById("search-results");

    // Clear previous search results
    searchResults.innerHTML = "";

    // Filter items based on the search term
    const filteredItems = sampleItems.filter(item =>
        item.toLowerCase().includes(searchTerm)
    );

    // Display search results
    filteredItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        searchResults.appendChild(listItem);
    });
}

// Attach the search function to the button click event
document.getElementById("search-button").addEventListener("click", performSearch);
