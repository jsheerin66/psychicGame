//var options = [ "a","b"."c","d","e","f","g","h","i","j","k","l","m", "n","o","p","q","r","s","q","u","v","w","x","y","z" ];

var options = ["a","b","c"];

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  console.log(userGuess);

  var guessesSoFar = document.getElementById('guessesSoFar');
  guessesSoFar.innerHTML = userGuess;

  var computerGuess = options[Math.floor(Math.random()*options.length)];

  console.log(computerGuess)
// why does it not alert "you are not psychic yet when userGuess is a,b,c?
  if (userGuess == 'a' || userGuess == 'b' || userGuess == 'c')
  {
      if ((userGuess == computerGuess)){
      alert("You are PSYCHIC!");
      	}
  }
  else {
      alert("Not psychic yet, try again!");
  }

	var html = "<h1>The Psychic Game</h1>";

	document.oneKeyUp.querySelector('#game').innerHTML= html;

}
