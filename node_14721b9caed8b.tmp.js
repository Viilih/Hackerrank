function divisibleSumPairs(n, k, ar) {
	let res = 0;
	for (let i = 0; i < n; i++) {
		let n1 = ar[i];
		for (let b = i + 1; i < n; b++) {
			if (n1 + ar[b] == k) {
				res++;
			}
		}
	}
	return res;
}

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));
