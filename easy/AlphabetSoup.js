/*
Using the JavaScript language, 
have the function AlphabetSoup(str) 
take the str string parameter being passed 
and return the string with the letters in 
alphabetical order (ie. hello becomes ehllo). 
Assume numbers and punctuation symbols will 
not be included in the string. 
*/

var AlphabetSoup = function(str) {
	var alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
	// we want to assign a numerical index to each alphabetString (could be object//could be array)
	var strArray = str.split('');
	var indexArray = [];
	for (var i = 0; i < strArray.length; i++) {
		indexArray[i] = alphabetArray.indexOf(strArray[i]);
	}
	// then, go through string (for-loop) and assign its index to a different array (indexArray?)
	// remember, index starts at 0
	// thus, a is at index 0
	// b is at index 1 etc.
	indexArray = indexArray.sort(function(a, b) {
		if (a < b) {
			return -1;
		} else if (b < a) {
			return 1;
		} else {
			return 0;
		}
	});
	// finally, use Array.prototype.sort() to create alphabetical order

	var returnStr = '';
	for (var x = 0; x < indexArray.length; x++) {
		returnStr += alphabetArray[indexArray[x]];
		// build returnStr sequentially
		// use indexArray to find the correct value in the alphabetArray
	}

	return returnStr;
	// then lookup on alphabetArray to return string
};
