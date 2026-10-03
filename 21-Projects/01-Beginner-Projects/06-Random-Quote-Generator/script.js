const quoteText = document.getElementById("quoteText")
const quoteAuthor = document.getElementById("quoteAuthor")
const copyQuote = document.getElementById("copyQuote")
const newQuote = document.getElementById("newQuote")
const quoteNumber = document.getElementById("quoteNumber")

const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },

    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },

    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },

    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },

    {
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },

    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },

    {
        quote: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },

    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vincent Peale"
    },

    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },

    {
        quote: "Your limitation—it's only your imagination.",
        author: "Unknown"
    }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomIndex]
    quoteText.textContent = randomQuote.quote;
    quoteAuthor.textContent = randomQuote.author;
    quoteNumber.textContent = String(randomIndex + 1).padStart(2,"0")
}

copyQuote.addEventListener("click", function() {
    const textCopy = `"${quoteText.textContent}" - ${quoteAuthor.textContent}`;
    navigator.clipboard.writeText(textCopy)
    copyQuote.textContent = "Copied!";

    setTimeout(function () {
        copyQuote.textContent = "Copy Quote";
    }, 1500);
});

newQuote.addEventListener("click", generateQuote);