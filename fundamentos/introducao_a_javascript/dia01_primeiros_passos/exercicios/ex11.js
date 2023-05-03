var salarioBruto = 30000;
var salarioBase;
var salarioLiquido;
var ir;
var aliquota;


if(salarioBruto > 5189.82){
  aliquota = 570.88
  salarioBase = salarioBruto - 570.88;
  console.log("Com a alíquota de R$" + aliquota + " o salário base é de R$" + salarioBase);
}
else if(salarioBruto <= 5189.82 && salarioBruto >= 2594.93){
  aliquota = salarioBruto * 0.11;
  salarioBase = salarioBruto - aliquota;
  console.log("Com a alíquota de R$" + aliquota + " o salário base é de R$" + salarioBase);
}
else if(salarioBruto <=2594.92 && salarioBruto > 1556.95){
  aliquota = salarioBruto * 0.09;
  salarioBase = salarioBruto - aliquota;
  console.log("Com a alíquota de R$" + aliquota + " o salário base é de R$" + salarioBase);
}
else if(salarioBruto < 1556.95){
  aliquota = salarioBruto * 0.08;
  salarioBase = salarioBruto - aliquota;
  console.log("Com a alíquota de R$" + aliquota + " o salário base é de R$" + salarioBase);
}

console.log("Agora no imposto de renda............");

if(salarioBase >= 4664.68){
  ir = (salarioBase * 0.275) - 869.36;
  salarioLiquido = salarioBase - ir;
  console.log("O seu imposto de renda é igual a R$" + ir.toFixed(3) + " e seu salário líquido é igual a R$" + salarioLiquido)
}
if(salarioBase < 4664.68 && salarioBase >= 3751.06){
  ir = (salarioBase * 0.225) - 636.13;
  salarioLiquido = salarioBase - ir;
  console.log("O seu imposto de renda é igual a R$" + ir.toFixed(3) + " e seu salário líquido é igual a R$" + salarioLiquido)
}
if(salarioBase < 3571.06 && salarioBase >= 2826.66){
  ir = (salarioBase * 0.15) - 354.80;
  salarioLiquido = salarioBase - ir;
  console.log("O seu imposto de renda é igual a R$" + ir.toFixed(3) + " e seu salário líquido é igual a R$" + salarioLiquido)
}
if(salarioBase < 2826.66 && salarioBase >= 1903.99){
  ir = (salarioBase * 0.075) - 142.80;
  salarioLiquido = salarioBase - ir;
  console.log("O seu imposto de renda é igual a R$" + ir.toFixed(3) + " e seu salário líquido é igual a R$" + salarioLiquido)
}
if(salarioBase < 1903.99){
  salarioLiquido = salarioBase;
  console.log("O seu salário líquido é o mesmo que seu salário base")
}
