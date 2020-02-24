<script>

/*
Operations & Comparisons
Step 1
Create two variables called "num1" and "num2". Assign each variable a different numerical value between 1 and 15.
*/

var num1 = 2;
var num2 = 14;

/*
Step 2
Using the variables above, add these variables together and multiply by 3. 
Assign the expression to a variable called "result" and console.log its value. 
*/

var result = (num1 + num2) * 3;
console.log(result);
document.write("(" + num1 + " + " + num2 + ") * 3 = " + result + "<br>");

/*
Step 3
Using the result variable, write an if/else statement comparing the result to the number 50.
If the result is larger than 50, console.log "Result is bigger". 
If it is smaller, console.log "Result is smaller"
*/

if (result > 50) {
	console.log("Result is bigger");
	document.write("Result is bigger than 50<br>");
}
else if (result < 50) {
	console.log("Result is smaller");
	document.write("Result is smaller than 50<br>");
}
else {
	console.log("Result does not meet any conditions");
	document.write("Result does not meet any conditions<br>");
}

/*
Arrays & Loops
Step 1
Create an empty array and assign it to a variable called "numberList".
*/

var numberList = [];

/*
Step 2
Using a for loop, place the numbers from 0 to 5 into the "numberList" array.
console.log the numberList array.
*/

for (var i = 0; i < 6; i++) {
	numberList.push(i);
	console.log(i);
	document.write("Array entry " + i + " is " + i + "<br>");
}

/*
Step 3
Remove the last number in the array and console.log the array.
*/

numberList.pop();
console.log(numberList);
document.write("After 'popping' the array now has entries: " + numberList + "<br>");

</script>
