const sum = (...numbers) => {
  let soma = 0;
  numbers.forEach((number) => {
    soma += number
  })
  return soma;
}


console.log(sum(4,5,6));