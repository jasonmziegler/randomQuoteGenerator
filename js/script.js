// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//generate a random number 1-6
var dieRoll = Math.floor(Math.random() * 6) + 1;
//Generate Alert to view random number
alert('You rolled a ' + dieRoll);
