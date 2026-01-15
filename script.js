// Array of quotes (you can add more)
const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    text: "Opportunities don't happen, you create them.",
    author: "Chris Grosser",
  },
  {
    text: "If you can dream it, you can do it.",
    author: "Walt Disney",
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
  },
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const copyBtn = document.getElementById("copy-quote");
const copiedMsgEl = document.getElementById("copied-msg");

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteEl.textContent = randomQuote.text;
  authorEl.textContent = "— " + randomQuote.author;
  copiedMsgEl.textContent = "";
}

async function copyQuoteToClipboard() {
  const textToCopy = `"${quoteEl.textContent}" ${authorEl.textContent}`;
  try {
    await navigator.clipboard.writeText(textToCopy);
    copiedMsgEl.textContent = "Quote copied!";
  } catch (err) {
    copiedMsgEl.textContent = "Unable to copy.";
  }
}

newQuoteBtn.addEventListener("click", showRandomQuote);
copyBtn.addEventListener("click", copyQuoteToClipboard);

// Show one quote when page loads
showRandomQuote();
