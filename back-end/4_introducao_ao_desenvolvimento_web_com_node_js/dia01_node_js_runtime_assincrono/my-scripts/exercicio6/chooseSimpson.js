const { questionInt } = require("readline-sync");
const fs = require('fs')
const simpValue = questionInt('Qual personagem deseja escolher? Escolha um numero de 1 a 10: ')

async function chooseSimpson(simpValue) {
  const data = await fs.readFileSync('simpsons.json', 'utf8')
  const simpsons = JSON.parse(data)
  const choose = simpsons.find((simpson) => Number(simpson.id) === simpValue)
  console.log(choose);
  if (!choose) {
    throw new Error('id não encontrado')
  }
  return choose;
}

chooseSimpson(simpValue)