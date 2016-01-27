/*
Using the JavaScript language, have the function FirstFactorial(num) take the num parameter 
being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). 
For the test cases, the range will be between 1 and 18. 
*/

function FirstFactorial(numpy) {
	for (var i = numpy - 1; i > 0; i --) {
		numpy *= i
	}
	return numpy;
}

// recursive
function FirstFactorial(num) { 
	if (num <= 1) {
		return 1;
	}
	return num * FirstFactorial(num - 1);
}

var userNum = parseInt(prompt('What number for factorial?'));
console.log(FirstFactorial(userNum));