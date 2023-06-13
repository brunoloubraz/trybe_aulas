const myList = [5, 2, 3];

// escreva swap abaixo

const swap = (lista) =>  [lista] = [lista[2],lista[1],lista[0]] 

console.log(swap(myList));



const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = (lista) => {
  const modelo = {
    nome: lista[0],
    fabricante: lista[1],
    ano: lista[2],
  }
  return modelo
}

console.log(toObject(palio));




// escreva greet abaixo

const greet = (nome = 'friend', greeting = 'Hi') => `${greeting} ${nome}`

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'





const student1 = {
  name: `Claudia`,
  lastName: `Farias`,
  age: 23,
}

const student2 = {
  name: `Vitor`,
  age: 20,
}

// escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`

const getLastName = (info) => info.lastName === undefined ? 'lastname não preenchido' : info.lastName

console.log(getLastName(student1));
console.log(getLastName(student2));

