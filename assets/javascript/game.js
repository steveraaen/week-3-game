

var bands = ["nirvana", "wallflowers", "trey anastasio"];
var band = [];
var guess = "";
var hangman_start = "<img src = 'assets/images/hangman-start.png' alt = 'som text'>"
var hangman_5 = "<img src = 'assets/images/hangman-5.png' alt = 'som text'>"
var hangman_4 = "<img src = 'assets/images/hangman-4.png' alt = 'som text'>"
var hangman_3 = "<img src = 'assets/images/hangman-3.png' alt = 'som text'>"
var hangman_2 = "<img src = 'assets/images/hangman-2.png' alt = 'som text'>"
var hangman_1 = "<img src = 'assets/images/hangman-1.png' alt = 'som text'>"
var hangman_lose = "<img src = 'assets/images/hangman-lose.png' alt = 'som text'>"


function checkGuess(arr, val) {
  return arr.some(function(arrVal) {
  		match = val === arrVal;
  	console.log(match);
    return val === arrVal;
  });
}
var stick= document.getElementById("stick");
document.getElementById("stick").innerHTML = hangman_start;
var bandpic = document.getElementById("bandpix");
var good = document.getElementById("goodletters");
var good = []
var bad = document.getElementById("badletters")
var bad = []
var count = document.getElementById("counter");
var count = 6;
var guess = document.getElementById("input");
counter.innerHTML = count;      
function setWord () {
	var idx = Math.floor(Math.random() * bands.length);
	band = bands[idx];
	band = band.split("");
	for (let i = 0; i < band.length; i++) {
		good.push(" _ ");
	}
		goodletters.innerHTML = good;
}
setWord();
input.onkeyup = function() {
	guess.value = event.key;
	for (let i = 0; i < band.length; i++){
		if (guess.value === band[i]){
			good[i] = band[i]
		}
	}
		checkGuess(band, guess.value);
	if (match === false){
		count -= 1;
		bad.push(guess.value) 
	}

	counter.innerHTML = count;
	goodletters.innerHTML = good;
	badletters.innerHTML = bad;
	if (good === band)	{
		alert("YOU WON!!")
	}

	else if (count === 5 && good !== band)	{
		stick = document.getElementById("stick").innerHTML = hangman_5;
		console.log("if  =" + count)
	}
	
	else if (count === 4){
		stick = document.getElementById("stick").innerHTML = hangman_4;
		console.log("if  =" + count)
	}
		else if (count === 3){
		stick = document.getElementById("stick").innerHTML = hangman_3;
		console.log("if  =" + count)
	}
		else if (count === 2){
		stick = document.getElementById("stick").innerHTML = hangman_2;
		console.log("if  =" + count)
	}
		else if (count === 1){
		stick = document.getElementById("stick").innerHTML = hangman_1;
		console.log("if  =" + count)
	}
	
		else if (count === 0) {
		stick = document.getElementById("stick").innerHTML = hangman_lose;		
		console.log("else  =" +count)
	}
	

	console.log("good  = " + good)
	console.log("band  = " + band)
}













