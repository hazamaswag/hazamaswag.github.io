var quotes = [
  "Life isn't about getting and having, it's about giving and being.",
  "Whatever the mind of man can conceive and believe, it can achieve.",
  "Strive not to be a success, but rather to be of value.",
  "Two roads diverged in a wood, and I-I took the one less traveled by, And that has made all the difference.",
  "I attribute my success to this: I never gave or took any excuse.",
  "You miss 100% of the shots you don't take."
]



function newQuote() {
  // var randomNumber = Math.floor(Math.random() * (quotes.length));
  // var nextQuote = quotes[randomNumber];

  // var nextQuote = quotes[0]
  currQuote = document.getElementById('quoteDisplay').innerHTML

  curr_ind = quotes.indexOf(currQuote)
  nextQuote = quotes[(curr_ind + 1) % quotes.length]
  
  document.getElementById('quoteDisplay').innerHTML = nextQuote
}
