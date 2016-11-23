function checkGood(arr, val) {
  		return arr.some(function(arrVal) {
  		match = val === arrVal;
  		console.log("good = "+ match)
    	return val === arrVal;
  });
}
var countries = ["croatia", "slovenia", "serbia", "bosnia", "romania", "poland"];
var country = [];
var guess = "";
var flag = document.getElementById("flag");
var serbia = "<img class = 'flag' src = 'assets/images/serbian-flag-medium.jpg' alt = 'som text'>"
var poland = "<img class = 'flag' src = 'assets/images/polish-flag-medium.jpg' alt = 'som text'>"
var croatia = "<img class = 'flag' src = 'assets/images/croatian-flag-medium.jpg' alt = 'som text'>"
var slovenia = "<img class = 'flag' src = 'assets/images/slovenian-flag-medium.jpg' alt = 'som text'>"
var bosnia = "<img class = 'flag' src = 'assets/images/bosnian-flag-medium.jpg' alt = 'som text'>"
var romania = "<img class = 'flag' src = 'assets/images/romanian-flag-medium.jpg' alt = 'som text'>"
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
	var idx = Math.floor(Math.random() * countries.length);
	countryStr = countries[idx];
	country = countryStr.split("");
	for (let i = 0; i < country.length; i++) {
		good.push(" _ ");
	}
		goodletters.innerHTML = good;
	if (countryStr === "poland"){
		flag = document.getElementById("flag").innerHTML = poland;
	}
	else if (countryStr === "romania"){
		flag = document.getElementById("flag").innerHTML = romania;
	}
	else if (countryStr === "slovenia"){
		flag = document.getElementById("flag").innerHTML = slovenia;
	}
	else if (countryStr === "croatia"){
		flag = document.getElementById("flag").innerHTML = croatia;
	}
	else if (countryStr === "serbia"){
		flag = document.getElementById("flag").innerHTML = serbia;
	}
	else if (countryStr === "bosnia"){
		flag = document.getElementById("flag").innerHTML = bosnia;
	}
}
setWord();

console.log(flag.innerHTML)

input.onkeyup = function() {
	guess.value = event.key;
	for (let i = 0; i < country.length + 1; i++){
		if (guess.value === country[i]){
			good[i] = country[i]
		}
	}	
	if (checkGood(country, guess.value) === false && checkGood(bad, guess.value) === false ){
		count -= 1;
		bad.push(guess.value) 
	}
	counter.innerHTML = count;
	goodletters.innerHTML = good.toString();
	usedletters.innerHTML = bad;
	if (good.toString() === country.toString())	{
		var playAgain = confirm("YOU WON!!  Play Again?")
		document.location.reload();
	}

	else if (count === 5 && good !== country)	{
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
	console.log("country  = " + country)
}













