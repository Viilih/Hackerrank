function staircase(n) {
	for (let i = 0; i < n; i++) {
		let str = '';
		// Put the blank spaces on the stair
		for (let k = 0; k < n - i - 1; k++) {
			str += ' ';
		}
		// Put the # on the stair
		for (let j = 0; j < i + 1; j++) {
			str += '#';
		}
		console.log(str);
	}
}
console.log(staircase(4));
// 000# --> i = 0 , 0 = 3. # = 1
// 00## --> i = 1 , 0 = 2, # = 2
// 0### --> i = 2 , 0 = 1, # = 3
// #### --> i = 3 , 0 = 0, # = 4

// # = i + 1
// 0 = n - i - 1
