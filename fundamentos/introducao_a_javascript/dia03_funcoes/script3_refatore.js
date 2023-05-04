let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function verificaCliente(cliente) {
  if (typeof cliente === 'string') {
    return true
  }
  else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
}

function alteraCliente(cliente){
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
        return index;
    }
  }
  return false
}

function removeCliente(cliente) {
  let validacao = verificaCliente(cliente);
  if (validacao !== true){
    return validacao;
  }
  let index = alteraCliente(cliente);
  if (index === false){
    return "Cliente não encontrado"
  }  

  clientesTrybeBank.splice(index, 1);
  return 'Cliente excluída(o) com sucesso.';
} 




console.log(removeCliente("John"));
console.log(clientesTrybeBank)
