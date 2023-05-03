let adicao;
let subtracao;
let multiplicacao;
let divisao;
let modulo;
let valor = 0;

console.log("EXERCICIO 1")

adicao = 1 + 242;
console.log(adicao);

subtracao = 2543 - 123;
console.log(subtracao);

multiplicacao = 35 * 58;
console.log(multiplicacao);

divisao = 576 / 24;
console.log(divisao);

modulo = 41 % 2;
console.log(modulo);

console.log("EXERCICIO 2")

if (adicao > subtracao) {
  console.log(adicao);
}
console.log(subtracao)

console.log("EXERCICIO 3")

if (divisao > adicao && divisao > adicao) {
  console.log(divisao);
}
else if (adicao > divisao && adicao > modulo) {
  console.log(adicao)
}
else {
  console.log(modulo);
}

console.log("EXERCICIO 4")

if (valor = true) {
  console.log("positive");
}
else if (valor = false) {
  console.log("negative");
}
else {
  console.log("zero");
}

console.log("EXERCICIO 5")

var angulo1 = 60;
var angulo2 = 60;
var angulo3 = 60;

if (angulo1 + angulo2 + angulo3 == 180) {
  console.log("é um triangulo");
}
else {
  console.log("Não é um triângulo");
}

console.log("EXERCICIO 6")

var peao = "FrenTE";

switch (peao.toLowerCase()) {
  case "frente":
    console.log("anda 1 casa para frente");
    break;
  case "atras":
    console.log("anda 1 casa para trás");
    break;
  case "direita":
    console.log("anda 1 casa para direita");
    break;
  case "esquerda":
    console.log("anda 1 casa para esquerda");
    break;
  default:
    console.log("Erro, movimento errado");
}
