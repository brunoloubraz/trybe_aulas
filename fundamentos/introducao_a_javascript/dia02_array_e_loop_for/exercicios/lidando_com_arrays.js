const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//1 item
// for (let index = 0; index < numbers.length; index += 1){
//   console.log(numbers[index]);
// }

//2 item
//let total = 0;
// for(let index = 0; index < numbers.length; index += 1){
//   total = total + numbers[index];
// }
// console.log(total);

//3 item
// let total = 0;
// let indice = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//   total += numbers[index];
//   indice = index;
// }

// let media = total/indice;
// console.log(media.toFixed(2));

// //item 4
// if(media > 20){
//   console.log("O valor da média artimética é maior que 20");
// }
// else{
//   console.log("O valor da média aritmética é menor ou igual a 20");
// }

//item 5
// let maiorNumero = 0
// for(index = 0; index < numbers.length; index += 1){
//   if(maiorNumero < numbers[index]){
//     maiorNumero = numbers[index]
//   }
// }

// console.log(maiorNumero);

//item 6
// let numerosImpares = 0;


//   for (let index = 0; index < numbers.length; index += 1) {
//     if(numbers[index] % 2 == 1){
//       numerosImpares += 1;
//     }
//   }

//   if (numerosImpares > 0){
//     console.log("O array possui " + numerosImpares + " números ímpares");
//   }
//   else{
//     console.log("Nenhum valor ímpar encontrado");
//   }

//item 7
//  let menorNumero = numbers[0]
 
//  for(index = 0; index < numbers.length; index += 1){
//    if(menorNumero > numbers[index]){
//      menorNumero = numbers[index]
//    }
//  }

//  console.log(menorNumero);

//item 8

const lista = [];

for (let index = 1; index <= 25; index += 1) {
  lista.push(index);
}
console.log(lista);

//item 9
// let divisor = 0;


// for (let index = 0; index < lista.length; index += 1){
// divisor = lista[index]/2;
// console.log("O resultado da divisão por "+ lista[index] +" é " + divisor);
// }
