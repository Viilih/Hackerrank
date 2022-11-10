let sex = 'women';
let height = 1.53;
let idWeight = 0;
if (sex === 'men') {
	idWeight = 22 * Math.pow(height, 2);
} else if (sex === 'women') {
	idWeight = 21 * Math.pow(height, 2);
}

console.log(
	`The ideal weigth for the person who the ${sex} sex is : ${idWeight.toFixed(
		2
	)} Kg`
);
