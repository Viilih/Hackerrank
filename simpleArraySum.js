function simpleArraysum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

console.log(simpleArraysum([10, 20, 30, 40, 60]));
