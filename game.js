
var animals = ["zebra","parrot","dolphin","dog","cat","rhino","opossum","fox","elephant","raccoon"];
var secretWord = animals[Math.floor(Math.random() * animals.length)].toLowerCase();

/**# of times user guessed the word correctly*/

/**# of guesses remaining for the user*/
var numberOfGuessesRemain = 10;

/***letters the user has guessed*/
var letterAlreadyGuessed = [];

var letterFound = false;
var badGuessArray = [];
var playerWins = 0;
var playerLosses = 0;

var winsElement = document.getElementById('playerWins')
var secretWordElement = document.getElementById('secretWord')
var numberOfGuessesRemainElement = document.getElementById('numberOfGuessesRemain')
var letterAlreadyGuessedElement = document.getElementById('letterAlreadyGuessed')

var secretWordArray = secretWord.split("")

var blankArr = new Array(secretWordArray.length)

for(var i = 0; i < secretWordArray.length; i++){
	blankArr[i] = "_ "
}

var blankString = blankArr.join(" ")

function gameReset(){
	numberOfGuessesRemain = 10;
	letterAlreadyGuessed = [];
	letterFound = false;
	badGuessArray = [];
	secretWord = animals[Math.floor(Math.random() * animals.length)].toLowerCase();
	secretWordArray = secretWord.split("")
	blankArr = new Array(secretWordArray.length)

	for(var i = 0; i < secretWordArray.length; i++){
		blankArr[i] = "_ "
	}

	winsElement.textContent = playerWins
	secretWordElement.textContent = blankArr.join(" ")
	numberOfGuessesRemainElement.textContent = numberOfGuessesRemain
	letterAlreadyGuessedElement.textContent = letterAlreadyGuessed
}

document.onkeyup = function(event){
	var userGuess = event.key;
	letterAlreadyGuessed.push(userGuess)
	numberOfGuessesRemain--;
	document.querySelector("#secretWord").innerHTML = blankArr.join(" ")
	
	for(var i = 0; i < secretWordArray.length; i++){
		if(userGuess === secretWordArray[i]){
			blankArr[i] = userGuess
			document.querySelector("#secretWord").innerHTML = blankArr.join(" ")
			letterFound = true;
		}
	}
	

//if the letter is not in the currentWordArray add it to the badGuessArray and print it to the screen, change the image, reduce and print the guessCount
	if (letterFound == false) {
		badGuessArray.push(userGuess);

// change the billboard, the image, the music to their losing state and resets the game
		if (numberOfGuessesRemain <= 0) {
			playerLosses++;
			gameReset();
		}
	}
	
	letterFound = false;

	if(blankArr.join("") === secretWord){
		playerWins++
		gameReset();
	}

	winsElement.textContent = playerWins
	secretWordElement.textContent = blankArr.join(" ")
	numberOfGuessesRemainElement.textContent = numberOfGuessesRemain
	letterAlreadyGuessedElement.textContent = letterAlreadyGuessed
}