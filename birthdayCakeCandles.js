const candles = [4, 4, 1, 3, 6];
let maior = [];
let candlesCounter = 0;

for (let i = 0; i < candles.length; i++) {
	if (candles[i] > maior) {
		maior = candles[i];
		candlesCounter = 1;
	} else if (maior == candles[i]) {
		candlesCounter++;
	}
}
console.log(maior, candlesCounter);
