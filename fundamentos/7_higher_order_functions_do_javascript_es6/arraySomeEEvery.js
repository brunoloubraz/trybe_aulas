// const pessoas = [
//   { nome: 'Ana', cargo: 'Analista' },
//   { nome: 'João', cargo: 'Gerência' },
//   { nome: 'Aline', cargo: 'Analista' },
//   { nome: 'Joana', cargo: 'Gerência' },
// ];

// const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');

// console.log(verificaCargo); // true

const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];

const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Product Owner');

console.log(verificaCargo); // false


const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false




const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((nome) => nome === name)
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

  // Adicione seu código aqui
  const verifyAges = (turma, idade) => {
  return turma.every((age => age.age >= idade))
 }

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));

