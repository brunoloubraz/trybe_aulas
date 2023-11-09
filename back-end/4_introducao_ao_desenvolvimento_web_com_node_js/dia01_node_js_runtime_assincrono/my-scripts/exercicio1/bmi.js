const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso');
const altura = readline.questionInt('Qual sua altura');

function imc(peso, altura) {
  
  const formatAltura = altura / 100
  const alturaFormula = formatAltura * 2

  const indice = peso / alturaFormula
  return indice;
}

function main(){
  const bmi = imc(peso, altura)
  console.log(bmi);
}

main()
module.exports= {
  imc
};