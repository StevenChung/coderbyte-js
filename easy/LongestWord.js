/*
Using the JavaScript language, have the function LongestWord(sen) 
take the sen parameter being passed and return the largest word in 
the string. If there are two or more words that are the same length, return 
the first word from the string with that length. Ignore punctuation 
and assume sen will not be empty. 
*/

function LongestWord(sen) {
	// remove punctuation
	sen = sen.replace(/[^\w\s]|_/g, ""); 
		// \w is any digit, letter, or underscore.
		// \s is any whitespace.
		// [^\w\s] is anything that's not a digit, letter, whitespace, or underscore.
		// [^\w\s]|_ is the same as #3 except with the underscores added back in.
	sen = sen.replace(/\s+/g," ");
		// \s+ one or more white space characters
		// /g global search
		// replace with just one space!

	var myArray = sen.split(' '); //array of the passed sen string

	var lengthArray = myArray.map(function(value) {return value.length;}); // array to store length property of each string


	// Math.max(...lengthArray); // max of array with SPREAD operator!
	return myArray[lengthArray.indexOf(Math.max(...lengthArray))];
		// spread operator of Math.max() on length array to find max length
		// search lengthArray with indexOf to find position
		// apply said index to myArray to return that word
}
