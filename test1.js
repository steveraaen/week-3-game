// bands

  
var nirvana = { 
	"name": "nirvana",
	"img": "src = 'assets/images/nirvana.jpg'"
},
wallflowers = { 
	"name": "wallflowers",
	"img": "src = 'assets/images/wallflowers.jpg'"
},
treyanastasio = { 
	"name": "trey anastasio",
	"img": "src = 'assets/images/treyanastasio.jpg'"
};
var bands = [nirvana, wallflowers, treyanastasio];
var used = document.getElementById("goodletters");
var used = {
			"strng": []
};
// controls / results
var guess = document.getElementById("input");

function setWord () {
	var idx = Math.floor(Math.random() * bands.length);
	currentword = bands[idx].name;
	used.length = (currentword.length);
	for (let i = 0; i < used.length; i++)	{
		used.strng.push(" _ ");
	}
		goodletters.innerHTML = used.strng;
}
setWord();
input.onkeyup = function() {
	/*used.length = currentword.length;*/
	guess.value = event.key;
		for (let i = 0; i < currentword.length; i++)	{
			if(guess.value === currentword[i]){
					used.strng[i] = currentword[i]

		console.log(used[i])
		console.log(guess.value === currentword[i])
		}

	} goodletters.innerHTML = used.strng;
}