// const brlValue = require('./brlValue');

// console.log(brlValue)
// console.log(`Valor do dólar: ${brlValue.brl}`);
// console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`);


const { brl, usdToBrl } = require('./brlValue');
console.log(`Valor do dólar: ${brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${usdToBrl(10)}`); // 10 dólares em reais: 53.7