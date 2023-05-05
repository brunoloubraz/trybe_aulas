function trybeBank_adicao(saldo, valor) {

  saldo = saldo + valor;
  return "Seu saldo é de R$" + saldo;
}
console.log(trybeBank_adicao(5000, 1000));

function trybeBank_subtracao(saldo, valor) {

  saldo = saldo - valor;
  return "Seu saldo é de R$" + saldo;
}
console.log(trybeBank_subtracao(5000, 1000));
function trybeBank_multiplicacao(saldo, valor) {

  saldo = saldo * valor;
  return "Seu saldo é de R$" + saldo;
}
console.log(trybeBank_multiplicacao(5000,1000)); 
function trybeBank_divisao(saldo, valor) {

  saldo = saldo / valor;
  return "Seu saldo é de R$" + saldo;
}
console.log(trybeBank_divisao(5000,1000)); 