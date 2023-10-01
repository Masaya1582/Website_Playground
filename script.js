const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
];

const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayRandomQuote() {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = randomQuote;
}

newQuoteButton.addEventListener("click", displayRandomQuote);

// Display an initial random quote when the page loads
displayRandomQuote();
