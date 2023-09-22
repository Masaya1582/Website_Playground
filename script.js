// Function to fetch a random quote asynchronously
async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.error('Error:', error);
        return 'Failed to fetch a quote';
    }
}

// Function to display the fetched quote
function displayQuote(quote) {
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerHTML = `<p>${quote}</p>`;
}

// Event listener for the "Load Quote" button
const loadQuoteButton = document.getElementById('load-quote');
loadQuoteButton.addEventListener('click', async () => {
    loadQuoteButton.disabled = true;
    loadQuoteButton.textContent = 'Loading...';
    const quote = await fetchQuote();
    displayQuote(quote);
    loadQuoteButton.disabled = false;
    loadQuoteButton.textContent = 'Load Quote';
});

// Initial quote load when the page loads
window.addEventListener('load', async () => {
    const quote = await fetchQuote();
    displayQuote(quote);
});
