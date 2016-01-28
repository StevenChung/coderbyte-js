/*
Using the JavaScript language, 
have the function LetterCapitalize(str) 
take the str parameter being passed and capitalize 
the first letter of each word. Words will be 
separated by only one space. 
*/

function LetterCapitalize(str) {
	var strArray = str.split(' ');
	for (var i = 0; i < strArray.length; i++) {
		var letterToCapitalize = strArray[i].charAt(0).toUpperCase();
		var restOfWord = strArray[i].slice(1);
		strArray[i] = letterToCapitalize + restOfWord;
	}

	return strArray.join(' ');
}