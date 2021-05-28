const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const newQuoteButton = document.querySelector("#new-quote");
const tweetButton = document.querySelector("#twitter-button")

const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const randomQuote = await response.json();

    if (!response.ok) {
        alert("Error getting the quote, please try again later.")
    }

    updateQuote(randomQuote);
}

const updateQuote =  (randomQuote) => {
    quote.innerHTML = `“${randomQuote.content}”`;
    author.innerHTML = `-${randomQuote.author}`;
    tweetButton.href =`https://twitter.com/intent/tweet/?text=${encodeURIComponent(randomQuote.content + ` - ` + randomQuote.author)}`;
}

newQuoteButton.addEventListener("click", fetchQuote);
fetchQuote();

