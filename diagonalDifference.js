function diagonalDifference(arr) {
	let rDiagonal = 0;
	let lDiagonal = 0;

	for (let i = 0; i < arr.length; i++) {
		lDiagonal += arr[i][i]; // arr[i] --> Acessar qual array entrar ( o Primeirop [1.2.3] o segundo [4,5,6] ou o terceiro[7,8,9])
		// [i] --> acessar qual elemento dentro dos arrays selecionados
		rDiagonal += arr[i][arr.length - 1 - i]; // [arr.length - 1] --> Vai dar o último elemento de um array // retorna o index do último elemento
		// [-i] --> Vai decrescendo o index para pegar outros elementos
	}
	return Math.abs(lDiagonal - rDiagonal);
}

console.log(
	diagonalDifference([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, -15],
	])
);
