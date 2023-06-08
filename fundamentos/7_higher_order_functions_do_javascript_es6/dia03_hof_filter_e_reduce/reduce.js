// const valorItens = [1, 32, 44, 2, 3];

// valorItens.reduce((acc, curr) => {
//   console.log(`acc:`, acc);
//   console.log(`curr:`, curr);
//   console.log('a soma atual é', acc + curr);

//   return acc + curr;
// }, 0);


// valorItens.reduce((acc, curr) => {
//   console.log(`valor atual é ${curr}`);
//   // Antes da primeira iteração o valor de início do `acc` é o valor no index 0 do array, e o valor de início de `curr` é o valor no index 1 do array.
//   // Iteração 1: valor do acc é 1 e o de curr é 32;
//   // Após a primeira iteração, o valor de `acc` muda e passa a acumular agora o resultado do retorno da callback (acc + curr).
//   // Iteração 2: valor do acc é 33 e o de curr é 44;
//   // Acontece então uma segunda iteração, e `curr` agora assume o valor do index na sequência do array, no caso o valor do segundo index e `acc` segue armazenando os retornos.
//   // Iteração 3: valor do acc é 77 e o de curr é 2;
//   // Iteração 4: valor do acc é 79 e o de curr é 3;
//   // Valor final de `acc` é 82 e `curr` para no 3.

//   return acc + curr; // Ao fim das iterações podemos ver que o `acc` armazenou o resultado total do retorno da função.
// });


// const numbers = [1, 32, 44, 2, 3];

// const sumNumbers =  (acc, curr) => acc + curr;

// const totalSum = numbers.reduce(sumNumbers, 30);

// console.log(totalSum); //112



//dois exmeplos feitos da mesma maneira
const nuumbers = [50, 85, -30, 3, 15];

let n = nuumbers.reduce((bigger, number) => bigger > number ? bigger : number);

console.log(n);

let x = nuumbers.reduce((acc, curr) => {
  if (acc > curr) {
    return acc
  } else {
    return curr
  }
}, 0);

console.log(x);


//PARA FIXAR

//1
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

let y = numbers.reduce((acc, curr) => {


},)