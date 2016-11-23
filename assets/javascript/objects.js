function checkGood(arr, val) {
  		return arr.some(function(arrVal) {
  		match = val === arrVal;
  		console.log("good = "+ match)
    	return val === arrVal;
  });
}
var planet_mode = "<a href ='index.html'>";
var balk_mode = "<a href ='index2.html'>";
document.getElementById("radio1").addEventListener("checked", balk_mode);
document.getElementById("radio2").addEventListener("checked", planet_mode);
var planets = ["jupiter", "earth", "saturn", "venus", "mercury", "uranus", "mars", "neptune"]
var planet = [];
var guess = "";
var picture = document.getElementById("flag");
var mars = "<img class = 'flag' src = 'assets/images/mars.jpeg' alt = 'som text'>"
var jupiter = "<img class = 'flag' src = 'assets/images/jupiter.jpeg' alt = 'som text'>"
var earth = "<img class = 'flag' src = 'assets/images/earth.jpeg' alt = 'som text'>"
var saturn = "<img class = 'flag' src = 'assets/images/saturn.jpeg' alt = 'som text'>"
var venus = "<img class = 'flag' src = 'assets/images/venus.jpeg' alt = 'som text'>"
var mercury = "<img class = 'flag' src = 'assets/images/mercury.jpeg' alt = 'som text'>"
var uranus = "<img class = 'flag' src = 'assets/images/uranus.jpeg' alt = 'som text'>"
var neptune = "<img class = 'flag' src = 'assets/images/neptune.jpeg' alt = 'som text'>"


var hangman_start = "<img class = 'stick' src = 'assets/images/hangman-start.png' alt = 'som text'>"
var hangman_5 = "<img class = 'stick' src = 'assets/images/hangman-5.png' alt = 'som text'>"
var hangman_4 = "<img class = 'stick' src = 'assets/images/hangman-4.png' alt = 'som text'>"
var hangman_3 = "<img class = 'stick' src = 'assets/images/hangman-3.png' alt = 'som text'>"
var hangman_2 = "<img class = 'stick' src = 'assets/images/hangman-2.png' alt = 'som text'>"
var hangman_1 = "<img class = 'stick' src = 'assets/images/hangman-1.png' alt = 'som text'>"
var hangman_lose = "<img class = 'stick' src = 'assets/images/hangman-lose.png' alt = 'som text'>"
var stick= document.getElementById("stick");
document.getElementById("stick").innerHTML = hangman_start;
var good = document.getElementById("goodletters");
var good = []
var bad = document.getElementById("usedletters")
var bad = []
var count = document.getElementById("counter");
var count = 6;
var guess = document.getElementById("input");
counter.innerHTML = count;      
function setWord () {
	var idx = Math.floor(Math.random() * planets.length);
	planetStr = planets[idx];
	planet = planetStr.split("");
	for (let i = 0; i < planet.length; i++) {
		good.push(" _ ");
	}
		goodletters.innerHTML = good;
	if (planetStr === "neptune"){
		flag = document.getElementById("flag").innerHTML = neptune;
	}
	else if (planetStr === "jupiter"){
		flag = document.getElementById("flag").innerHTML = jupiter;
	}
	else if (planetStr === "earth"){
		flag = document.getElementById("flag").innerHTML = earth;
	}
	else if (planetStr === "mars"){
		flag = document.getElementById("flag").innerHTML = mars;
	}
	else if (planetStr === "uranus"){
		flag = document.getElementById("flag").innerHTML = uranus;
	}
	else if (planetStr === "saturn"){
		flag = document.getElementById("flag").innerHTML = saturn;
	}
	else if (planetStr === "jupiter"){
		flag = document.getElementById("flag").innerHTML = jupiter;
	}
		else if (planetStr === "mercury"){
		flag = document.getElementById("flag").innerHTML = mercury;
	}
}
setWord();

console.log(flag.innerHTML)

input.onkeyup = function() {
	guess.value = event.key;
	for (let i = 0; i < planet.length + 1; i++){
		if (guess.value === planet[i]){
			good[i] = planet[i]
		}
	}	
	if (checkGood(planet, guess.value) === false && checkGood(bad, guess.value) === false ){
		count -= 1;
		bad.push(guess.value) 
	}
	counter.innerHTML = count;
	goodletters.innerHTML = good.toString();
	usedletters.innerHTML = bad;
	if (good.toString() === planet.toString())	{
		var playAgain = confirm("YOU WON!!  Play Again?")
		document.location.reload();
	}

	else if (count === 5 && good !== planet)	{
		stick = document.getElementById("stick").innerHTML = hangman_5;
	}	
	else if (count === 4){
		stick = document.getElementById("stick").innerHTML = hangman_4;
	}
	else if (count === 3){
		stick = document.getElementById("stick").innerHTML = hangman_3;
	}
	else if (count === 2){
		stick = document.getElementById("stick").innerHTML = hangman_2;
	}
	else if (count === 1){
		stick = document.getElementById("stick").innerHTML = hangman_1;
	}
	else if (count === 0) {
		stick = document.getElementById("stick").innerHTML = hangman_lose;
		var playAgain = confirm("YOU LOST!!  Play Again?")
		document.location.reload();		
	}
	console.log("good  = " + good)
	console.log("planet  = " + planet)
}













