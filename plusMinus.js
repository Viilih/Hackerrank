function plusMinus(arr) {
	let pc = 0;
	let nc = 0;
	let n = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			pc += 1;
		} else if (arr[i] < 0) {
			nc += 1;
		} else {
			n += 1;
		}
	}
	console.log(
		'The ratio of the positive number is: ' + (pc / arr.length).toFixed(6)
	);
	console.log(
		'The ratio of the negative number is: ' + (nc / arr.length).toFixed(6)
	);
	console.log(
		'The ratio of the null numbers is: ' + (n / arr.length).toFixed(6)
	);
}

console.log(plusMinus([1, 1, 0, -1, -1]));
