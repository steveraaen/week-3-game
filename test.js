var nirvana = {
	"name": "nirvana",
	"img": "src = 'assets/images/nirvana.jpg'",
}
var wallflowers = {
	"name": "wallflowers",
	"img": "src = 'assets/images/wallflowers.jpg'",
}
var treyanastasio = {
	"name": "trey anastasio",
	"img": "src = 'assets/images/treyanastasio.jpg'",
}
var words = [nirvana, wallflowers, treyanastasio],
	remaining = document.getElementById("goodletters"),
	guess = "",
	guessString = {
					"strng": ""
					},
	guess = document.getElementById("input"),
	counter = 0,
	count = document.getElementById("counter");
	
function setWord () {
	var idx = Math.floor(Math.random() * words.length);
	    wordslen = words.length;
		currentword = words[idx];
		cwl = currentword.name.length;
		for (let i = 0;i < cwl; i++)	{
			guessString.strng += " _ ";				
		}
	console.log(guessString.strng);
	remaining.innerHTML = guessString.strng;
}

setWord();

input.onkeyup = function() {
	guess.value = event.key;
	gv = guess.value;
	cwv = currentword.name;
	cwvs = cwv.toString();

		for(let i = 0; i < cwl; i++)	{
			if(gv === cwv[i]){
			function replaceAll() {
    			guessString.strng.substr(guessString.strng[i])+ gv + guessString.strng.substr(guessString.strng[i]+gv.length);
			}
			replaceAll();
		}
};
	 


console.log(guessString);
console.log(cwv);
console.log(gv);

}
