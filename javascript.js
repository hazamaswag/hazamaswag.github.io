var quotes = [
  "Life isn't about getting and having, it's about giving and being.",
  "Whatever the mind of man can conceive and believe, it can achieve.",
  "Strive not to be a success, but rather to be of value.",
  "Two roads diverged in a wood, and I-I took the one less traveled by, And that has made all the difference.",
  "I attribute my success to this: I never gave or took any excuse.",
  "You miss 100% of the shots you don't take."
]

function shuffle() {
  for (i = quotes.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    let t = quotes[i]
    quotes[i] = quotes[j]
    quotes[j] = t
  }
}

// Try storing the quote instead. Use the next quotes index to stop the potential
// double quote bug

function newQuote() {
  // shuffle(quotes)
  if (localStorage.last_quote) {
      currQuote = quotes[get_last_quote()]
  }
  else {
      currQuote = document.getElementById('quoteDisplay').innerHTML
  }

  curr_ind = quotes.indexOf(currQuote)
  next_ind = (curr_ind + 1) % quotes.length
  set_last_quote(next_ind)
  nextQuote = quotes[get_last_quote()]

  document.getElementById('quoteDisplay').innerHTML = nextQuote
}

function set_last_quote(quote) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("last_quote", quote)
    }
    else {
        alert('no local storage')
    }
}

function get_last_quote() {
    return parseInt(localStorage.getItem("last_quote"))
}
