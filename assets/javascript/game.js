var ans = "nirvana",
	gues = "_______",
	a = document.getElementById("input");
	spans = ans.split("");
	spgues = gues.split("")

console.log(spgues);
console.log(spans);


      // Next, we give JavaScript a function to execute when onkeyup event fires.

input.onkeyup = function () {
    a.value = event.key;
    	for (i = 0; i < spans.length; i++)	{
    		if (spans[i] === a.value)	{
    			var n = spans.indexOf(spans[i]);
    			spgues.splice(a.value,1, spans[n]);

console.log(n);    		
console.log(a.value);
console.log(spans[i])
console.log(spans[i] === a.value)
    	}
    }
/*	    var n = spans.indexOf(a);*/
/*console.log(a.value);
console.log(spans[i])	*/	

/*console.log(a.value);
console.log(input.value);
console.log(i);*/
var remaining = document.getElementById("usedletters");
remaining.innerHTML = spgues;
}


var remaining = document.getElementById("usedletters");
remaining.innerHTML = spgues;