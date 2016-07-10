// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//generate a random number 1-6
// var dieRoll = Math.floor(Math.random() * 6) + 1;
//Generate Alert to view random number
// alert('You rolled a ' + dieRoll);

//create an object
var quote = {
  text: 'Mr. Luck says you can change the world.', //text of the quote to display
  source: 'Mr. Luck', //name of the creator of the quote
  citation: 'The Tap Room',
  year: '2003'
};

//create printQuote function
function printQuote(quote) {
  var div = document.getElementById('quote-box');
  div.innerHTML = message;
}

//var message = 'Hello';

var message = '<p class="quote">' + quote.text + '</p>' + '<p class="source">' + quote.source + '<span class="citation">' + quote.citation + '</span><span class="year">' + quote.year + '</span></p>';
