// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }

// let food = ['hambúrguer', 'bife', 'acarajé'];
// for (let value of food) {
//   console.log(value);
// };
// //resultado: hambúrguer, bife, acarajé;

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (let key in names){
//   console.log('Olá, ' + names[key]);
// }

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car){
  console.log(key +": " + car[key]);
}
