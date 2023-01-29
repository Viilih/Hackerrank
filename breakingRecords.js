function breakingRecords(scores) {
	let score = scores[0];
	let maxScore = score;
	let minScore = score;
	let max = 0;
	let min = 0;

	for (let i of scores) {
		if (i > maxScore) {
			maxScore = i;
			max++;
		} else if (i < minScore) {
			minScore = i;
			min++;
		}
	}
	return [max, min];
}
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
