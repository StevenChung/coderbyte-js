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
	// split the string into one character items and into an array 
	if (strArray[0].search(/[A-Za-z]/) !== -1) {
		return 'false';
	}
	// if the first item is a letter, it will fail the prescribed test
	// thus, return a false

	// NOTE: String.prototype.search() can use a regex
	// passed above is a regular expression that sees if it is a letter (between A-Z or a-z)
	// thus, if the first item is a letter (returns index if true).

	if (strArray[strArray.length - 1].search(/[A-Za-z]/) !== -1) {
		return 'false';
	}

	// similar to above, but on the last item


	for (var i = 1; i <= strArray.length - 2; i++) {
		// the tests for the first and last item were above
		// thus, this for-loop starts at the 2nd item and ends at the second to last item
		if (strArray[i].search(/[A-Za-z]/) === 0) {
			// if the item is a letter, perform the following test

			if (strArray[i - 1] !== '+' || strArray[i + 1] !== '+') {
				return 'false';
			}
			// if the preceding item is not a + or the following item is not a +
			// return false (fails the prescribed test)

		}
	}

	return 'true';
	// if you somehow get through the above gauntlet, return true

	// can't use reduce()/filter() because the above tests were custom for the first/last item
	// thus, the for-loop intentionally takes the second item up to (and including) the second to last item
}