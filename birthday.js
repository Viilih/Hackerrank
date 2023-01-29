function birthday(s, d, m) {
	let sum = 0;
	let res = 0;
	for (let i = 0; i < s.length; i++) {
		sum = 0;
		let ar = s.slice(i, i + m);

		for (let k of ar) {
			sum += k;
		}

		if (sum == d) {
			res++;
		}
	}

	return res;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2));
