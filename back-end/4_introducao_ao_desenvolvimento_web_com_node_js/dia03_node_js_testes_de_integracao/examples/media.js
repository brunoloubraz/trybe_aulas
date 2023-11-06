
const notasTotais = [10,9,8,7]

function media(notas) {
  const media = notas.reduce((acc, nota) =>{
    return nota + acc 
  }, 0)
  const mediafinal  = media / notasTotais.length;
  return mediafinal < 7 ? 'Reprovado' : 'Aprovado';
}

console.log(media(notasTotais));