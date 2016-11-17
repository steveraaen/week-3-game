var stfull = "src = 'assets/images/hangmanfull.png' alt='full stickman figure'";
var st1 = "src = 'assets/images/hangman-1.png' alt='full stickman figure'";
var st2 = "src = 'assets/images/hangman-2.png' alt='full stickman figure'";
var st3 = "src = 'assets/images/hangman-3.png' alt='full stickman figure'";
var st4 = "src = 'assets/images/hangman-4.png' alt='full stickman figure'";
var st5 = "src = 'assets/images/hangman-5.png' alt='full stickman figure'";
var stlose = "src = 'assets/images/hangman-lose.png' alt='full stickman figure'";
var stcurrent = "src = 'assets/images/hangmanfull.png' alt='full stickman figure'"

var strng= "nirvana"
var newstrng= [];
var i = 0;
;
	while (newstrng.length != strng.length){
		var guess = prompt("Guess a letter")
			if (guess = strng[i])	{
				newstrng.push(strng[i])
			}	
			else prompt("Guess Again")
	}





function stick(){
	cp = document.getElementById("left")
		var count = 6;
		var let = prompt("Guess A Letter");
			while (count > 0){
				if (count === 5){
					stcurrent = "src = 'assets/images/hangman-1.png' alt='full stickman figure'";
				}
				else if (count === 4){
					stcurrent = "src = 'assets/images/hangman-2.png' alt='full stickman figure'";
				}
				else if (count === 3){
					stcurrent = "src = 'assets/images/hangman-3.png' alt='full stickman figure'";
				}
				else if (count === 2){
					stcurrent = "src = 'assets/images/hangman-4.png' alt='full stickman figure'";
				}
				else if (count === 1){
					stcurrent = "src = 'assets/images/hangman-5.png' alt='full stickman figure'";
				}
				else{
					var stcurrent = "src = 'assets/images/hangman-lose.png' alt='full stickman figure'";
				}
		count -= 1;
	}
	}