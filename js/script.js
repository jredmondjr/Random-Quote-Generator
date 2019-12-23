/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Class to create a new quote object
class newQuote {
  constructor(quote, source, citation, year, tag){
  this.quote = quote;
  this.source = source;
  this.citation = citation;
  this.year = year;
  this.tag = tag
  }
}

// Creating quotes array and filling with quote objects
quotes = [];
quotes.push(new newQuote("Life is about making an impact, not making an income.", "Kevin Kruse", "movie", 2015));
quotes.push(new newQuote("Whatever the mind of man can conceive and believe, it can achieve, not making an income.", "Napoleon Hill", "book", 2016, "politics"));
quotes.push(new newQuote("Strive not to be a success, but rather to be of value.", "Albert Einstein", "play", 2017));
quotes.push(new newQuote("Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "Robert Frost", "tv", 2018, "comedy"));
quotes.push(new newQuote("I attribute my success to this: I never gave or took any excuse.", "Florence Nightingale", "speech", 2019));


// Gets a random quote object from quotes array and returns it
const getRandomQuote = () =>{
  randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum]
}
const getRandomColor = () => {
  randomNum1 = Math.floor(Math.random() * 256)
  randomNum2 = Math.floor(Math.random() * 256)
  randomNum3 = Math.floor(Math.random() * 256)
  return `rgb(${randomNum1},${randomNum2},${randomNum3})`;
}


// Replaces the text in the html with the randomQuote objects values
const printQuote = () => {
  let randomQuote = getRandomQuote();
  document.querySelector(".quote").innerHTML = randomQuote.quote;
  document.querySelector(".source").innerHTML = randomQuote.source + "<span class='citation'></span><span class='year'></span><span class='tag'></span>";
  document.querySelector(".citation").innerHTML = randomQuote.citation;
  document.querySelector(".year").innerHTML = randomQuote.year;
  if(randomQuote.tag != undefined){document.querySelector(".tag").innerHTML = ", " + randomQuote.tag};
  document.body.style.backgroundColor = getRandomColor();
}

setInterval(printQuote, 20000);
// adds eventlistener to the button with type click and function printQuote
document.getElementById('load-quote').addEventListener("click", printQuote, false);