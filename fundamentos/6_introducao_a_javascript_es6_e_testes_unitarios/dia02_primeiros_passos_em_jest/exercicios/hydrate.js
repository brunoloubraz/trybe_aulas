const hydrate = (text) => {
  let n = text.match(/\d+/g);
  let soma = 0
  for (let index = 0; index < n.length; index += 1) {
    soma += parseInt(n[index])
  }
  if (soma === 1) return '1 copo de água';
  if (soma > 1) return `${soma} copos de água`;
}

module.exports = hydrate;
