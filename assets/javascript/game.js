var options = [ "a","b","c","d","e","f","g","h","i","j","k","l","m", "n","o","p","q","r","s","q","u","v","w","x","y","z" ];
var wins= 0;
var losses= 0;
var guessesLeft= 9;
var guessesSoFar= 0;

var computerGuess = options[Math.floor(Math.random()*options.length)];

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  console.log("userGuess: " + userGuess);
  console.log("computerGuess: " + computerGuess);

// why does it not alert "you are not psychic yet when userGuess is a,b,c?
	// one general line to cover all letters of alphabet

  if ((userGuess == computerGuess)){
      console.log("You are PSYCHIC!");
  } else {
      console.log("Not psychic yet");
  }

	if ((userGuess != computerGuess)){
			guessesLeft --;
			console.log("guessesLeft: " + guessesLeft);
			guessesSoFar = userGuess;
			console.log("guessesSoFar: " + guessesSoFar);

	}
	var html = "<h1> The Psychic Game </h1>" +
						"<p> Am I guessing... a || b, press a key to c</p>" +
			    	"<p> Wins: </p>" +
			    	"<p> Losses: </p>" +
			    	"<p> Guesses Left: " + guessesLeft + " </p>" +
						"<p> Your Guesses so far: " + guessesSoFar + "  </p>";
document.querySelector('#game').innerHTML = html;

	// understand what the + variable + means
}
