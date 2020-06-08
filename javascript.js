var quotes = [
  "Life isn't about getting and having, it's about giving and being.",
  "Whatever the mind of man can conceive and believe, it can achieve.",
  "Strive not to be a success, but rather to be of value.",
  "Two roads diverged in a wood, and I-I took the one less traveled by, And that has made all the difference.",
  "I attribute my success to this: I never gave or took any excuse.",
  "You miss 100% of the shots you don't take."
]

function shuffle(array) {

  for (i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    let t = array[i]
    array[i] = array[j]
    array[j] = t

  }
}

function newQuote() {
  // shuffle(quotes)

  currQuote = document.getElementById('quoteDisplay').innerHTML
  curr_ind = quotes.indexOf(currQuote)
  next_ind = (curr_ind + 1) % quotes.length
  nextQuote = quotes[next_ind]

  document.getElementById('quoteDisplay').innerHTML = nextQuote
}
