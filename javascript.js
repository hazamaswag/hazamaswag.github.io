var quotes = [
  'Random Quotes',
  'Haha Funny Kate!',
  'More quotes'
]

var quotes = JSON.parse('quotes.json');

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
