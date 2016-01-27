/* Using the JavaScript language, have the function FirstReverse(str) take the 
str parameter being passed and return the string in reversed order. 
*/

var stringToReverse = prompt('What is the string to reverse?').toString();

function FirstReverse (str) {
	var xyz = str.split('').reverse().join('');
	return xyz;
}

function FirstReverseAlternative (str) {
	var newStr;
	for (var i = str.length - 1; i <= 0; i--) {
		newStr = newStr + str.charAt(i);
	}
	return newStr;
}

console.log(FirstReverse(stringToReverse));

function FirstReverseAlternative (str) {

	var newStr;
	for (var i = str.length - 1; i >= 0; i--) {
		newStr += str.charAt(i);
	}
	return newStr;
	/*
	var i = str.length - 1
	charAt uses index, so, because length is a value starting from 1,
	we need -1 to apply index values
	i >= 0 because it needs to be able to start running
	it starts at least positive
	then iterates down
	i <= 0 is wrong because it will never be less than 0 to start, so will never run
	unless it is equal to zero
	*/
}

console.log(FirstReverseAlternative(stringToReverse));