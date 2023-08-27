const searchInput = document.getElementById("searchInput");
const suggestionCard = document.getElementById("suggestionCard");
const suggestionList = document.getElementById("suggestionList");

const suggestions = ["Apple", "Banana", "Cherry", "Grapes", "Orange", "Pear"];

searchInput.addEventListener("input", function() {
  const inputText = searchInput.value.toLowerCase();
  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(inputText)
  );

  displaySuggestions(filteredSuggestions);
});

function displaySuggestions(suggestions) {
  suggestionList.innerHTML = "";
  suggestions.forEach(suggestion => {
    const listItem = document.createElement("li");
    listItem.textContent = suggestion;
    listItem.addEventListener("click", function() {
      searchInput.value = suggestion;
      suggestionCard.style.display = "none";
    });
    suggestionList.appendChild(listItem);
  });

  suggestionCard.style.display = "block";
}

document.addEventListener("click", function(event) {
  if (!suggestionCard.contains(event.target) && event.target !== searchInput) {
    suggestionCard.style.display = "none";
  }
});
