/*
Using the JavaScript language, 
have the function SimpleSymbols(str) 
take the str parameter being passed and 
determine if it is an acceptable sequence by either returning 
the string true or false. The str parameter 
will be composed of + and = symbols with several letters between them 
(ie. ++d+===+c++==a) and for the string to be true each letter must 
be surrounded by a + symbol. So the string to the left would be false. 
The string will not be empty and will have at least one letter. 
*/

function SimpleSymbols(str) {
	var strArray = str.split('');
	// split string into an array 
	// each item of this array will be one character
	// this lets us evaluate each item through a loop and each item independently

	if (strArray[0] !== '+' && strArray[0] !== '=') {
		return 'false';
	}
	// if the first character is NOT a + AND not an =
	// return false
	// in hindsight, this is slightly unnecessary
	// we just need to check to see if the first character is a letter
	// if it is, it's a false

	if (strArray[strArray.length - 1] !== '+' && strArray[strArray.length - 1] !== '=') {
		return 'false';
	}
	// similar to above, but just the last character


	for (var i = 1; i <= strArray.length - 2; i++) {
		if (strArray[i].search(/[A-Za-z]/) === 0) {
		// look up .search() with regex
		// if the string is a letter
		// if the character is a letter, perform the subsequent check
			if (strArray[i - 1] !== '+' || strArray[i + 1] !== '+') {
				return 'false';
			}
			// if the preceding letter is NOT a plus
			// OR if the following letter is NOT a plus
			// return a false
		}
	}

	return 'true';
	// if somehow we get to this point, all other conditions were not run
	// thus, it's a 'true'!


	// can't use reduce()/filter() because the above tests were custom for the first/last item
}






