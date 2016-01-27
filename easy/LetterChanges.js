function LetterChanges(str) { 
	var alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var offsetABCArray = [];
	for (var i = 0; i < alphabetArray.length; i++) {
		if (i === alphabetArray.length - 1) {
			offsetABCArray[i] = alphabetArray[0];
		} else {
			offsetABCArray[i] = alphabetArray[i + 1];
		}
	}
	var vowels = ['a', 'e', 'i', 'o', 'u'];

	var stringArray = str.split('');
	for (var x = 0; x < stringArray.length; x++) {
		var searchVar = stringArray[x];
		if (alphabetArray.indexOf(searchVar) >= 0) {
			stringArray[x] = offsetABCArray[alphabetArray.indexOf(searchVar)];
		}

		if (vowels.includes(stringArray[x])) {
			stringArray[x] = stringArray[x].toUpperCase();
		}
	}

	return stringArray.join('');
}

// Steven's V1!
// FYI, String.prototype.indexOf ALSO EXISTS