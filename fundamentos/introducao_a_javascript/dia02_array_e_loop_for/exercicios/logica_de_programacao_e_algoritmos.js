//item 1

// let fatorial = 1;

// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
// }

// console.log(fatorial);

//item 2

// let word = 'tryber';
// let palavra = ""; 

// for (let index = 0; index < word.length; index+= 1) {
//  palavra = palavra + word[word.length - 1 - index]
// }

// console.log(palavra);

//item 3

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let maiorPalavra = array[0];
// let menorPalavra = array[0];

// for (let index = 0; index < array.length; index+= 1) {
//   if(maiorPalavra.length < array[index].length){
//     maiorPalavra = array[index];
//   }
// }

// for (let index = 0; index < array.length; index+= 1) {
//   if(menorPalavra.length > array[index].length){
//     menorPalavra = array[index];
//   }
// }

// console.log("Maior palavra: "+ maiorPalavra);
// console.log("Menor palavra: "+ menorPalavra);

//item 4

let biggestPrimeNumber = 0;

for (let currentNumber = 50; currentNumber >= 2; currentNumber -= 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
    break; // O break finaliza a execução do laço For
  }
}

console.log(biggestPrimeNumber);


