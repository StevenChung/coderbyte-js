/*
Using the JavaScript language, have the function TimeConvert(num)
 take the num parameter being passed
  and return the number of hours and minutes 
  the parameter converts to (ie. if num = 63 
  then the output should be 1:3). Separate the number 
  of hours and minutes with a colon. 
*/

function TimeConvert(num) {
	var hours = 0;
	var minutes = 0;

	while (num >= 60) {
		hours += 1;
		num -= 60;
	}

	minutes += num;
	return hours + ':' + minutes;
}

var TimeConvert = function(num) {
	var hours = Math.floor(num/60);
	var minutes = num % 60;

	return hours + ':' + minutes;
}