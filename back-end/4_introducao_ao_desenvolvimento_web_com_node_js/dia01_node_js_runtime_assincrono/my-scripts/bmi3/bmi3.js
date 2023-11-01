const { questionInt, questionFloat } = require("readline-sync");

const peso = questionFloat('Informe o seu peso: ');
const altura = questionInt('Informe a sua altura: ');

function imc(peso, altura) {
  
  const formatAltura = altura / 100
  const alturaFormula = formatAltura * 2

  const indice = peso / alturaFormula

  return indice;
}

function main(){
  const bmi = imc(peso, altura)
  if (bmi < 18.5) {
    console.log(bmi);
    console.log('Status: Underweight (thin)');
    return;
  }

  if (bmi >= 18.5 && bmi < 25) {
    console.log(bmi);
    console.log('Status: Normal weight');
    return;
  }

  if (bmi >= 25 && bmi < 30) {
    console.log(bmi);
    console.log('Status: Overweight');
    return;
  }

  if (bmi >= 30 && bmi < 35) {
    console.log(bmi);
    console.log('Status: Grade I obesity');
    return;
  }

  if (bmi >= 35 && bmi < 40) {
    console.log(bmi);
    console.log('Status: Grade II obesity');
    return;
  }

  console.log('Status: Obesity grades III and IV');
}

main()
module.exports= {
  imc
};