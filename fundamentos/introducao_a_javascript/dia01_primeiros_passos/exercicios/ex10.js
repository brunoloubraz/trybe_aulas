var custoDoProduto = 90.0;
var valorDeVenda = 145.90;
var lucro;
var imposto = 0.2;
var impostoCalculado;
var lucroReal;


if (custoDoProduto == 0 || valorDeVenda == 0 || imposto == 0) {

  console.log("Erro!");

}
else {
  //lucro
  lucro = valorDeVenda - custoDoProduto
  console.log("Lucro BRUTO: " + lucro.toFixed(2))

  //calcula imposto
  impostoCalculado = (custoDoProduto * imposto) + custoDoProduto
  console.log("Custo do produto com imposto de 20%: " + impostoCalculado)

  lucroReal = valorDeVenda - impostoCalculado;
  console.log("Lucro com imposto: " + lucroReal.toFixed(2));
}