var ans = "nirvana",
	gues = "_______",
	used = [];
	counter = 0;
	c = document.getElementById("counter");
	a = document.getElementById("input");
	spans = ans.split("");
	spgues = gues.split("")
input.onkeyup = function () {
    a.value = event.key;
    var i = 0;

    	while (i < spans.length)	{
    	var n = spans.indexOf(spans[i]);
    		if (spans[i] === a.value && spans[i] !== used[i])	{
    			spgues.splice(n,1, spans[n]);
    			counter = counter + 0;
				}
			else if (spans[i] !== a.value)  {
				var wrong = a.value;				
				}
			else{

			}

     i++;

    }
         used.push(wrong);
         counter = used.length;

console.log(used);
console.log(counter);
console.log(spans[i] != a.value)
var remaining = document.getElementById("goodletters");
remaining.innerHTML = spgues;
}
var remaining = document.getElementById("goodletters");
remaining.innerHTML = spgues;