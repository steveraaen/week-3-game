

var bands = ["nirvana", "wallflowers", "trey anastasio"];
var band = [];
var guess = "";

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
  		match = val === arrVal;
  	console.log(match);
    return val === arrVal;
  });
}

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

	for (let i = 1; i < band.length; i++){
		if (guess.value === band[i]){
			good[i] = band[i]
		}
	}
		checkAvailability(band, guess.value);
	if (match === false){
		count -= 1;
		bad.push(guess.value) 
	}
	counter.innerHTML = count;
	goodletters.innerHTML = good;
	badletters.innerHTML = bad;
}















