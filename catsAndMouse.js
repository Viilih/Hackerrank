function catAndMouse(x, y, z) {
	let mouseC = z;
	let gatoA = x;
	let gatoB = y;

	if (Math.abs(mouseC - gatoB) > Math.abs(mouseC - gatoA)) {
		return 'Cat A';
	} else if (Math.abs(mouseC - gatoA) > Math.abs(mouseC - gatoB)) {
		return 'Cat B';
	} else {
		return 'Mouse C';
	}
}
console.log(catAndMouse(1, 3, 2));
