function SimpleAdding(num) {
	if (num === 1) {
		return 1;
	}

	if (num <= 0) {
		return 'prompt was 1 to num... nice try!';
	}

	return num + SimpleAdding(num - 1);
}

var SimpleAdding = function(num) {
	if (num === 1) {
		return 1;
	}

	if (num <= 0) {
		return 'prompt was 1 to num... nice try!';
	}

	return num + SimpleAdding(num - 1);
}