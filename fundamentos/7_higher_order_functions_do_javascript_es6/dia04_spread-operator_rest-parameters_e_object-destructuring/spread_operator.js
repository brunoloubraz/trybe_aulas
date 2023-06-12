// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];

// nova variável
const newItems = [...items, 'batatinha'];

console.log(newItems.length);
console.log(newItems);

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);

// const product = {
//   id: 1,
//   name: 'Camiseta',
// };

// const newProduct = {
//   ...product,price: 10
// };

// console.log(newProduct);

const product = {
  id: 1,
  name: 'Camiseta',
};

const productPrice = {
price: 23
}

// espalha o objeto `product` e espalha o objeto `productPrice`
const newProduct = { ...product, ...productPrice };

console.log(newProduct); // {id: 1, name: 'Camiseta', price: 23}

console.log(Math.max(57, 8, 5, 800, 152, 74, 630, 98, 40)); // 800

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800


// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'mamão', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['bacon', 'calabresa', 'sopinha'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const saladinha  = [...fruit,...additional]
  return saladinha;
};

console.log(fruitSalad(specialFruit, additionalItens));
