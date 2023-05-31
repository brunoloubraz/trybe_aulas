const studentRegister = (name, age) => {

  try {
    if (name  === undefined || age === undefined) {
      throw new Error('Todas as informações são necessárias')
    }
    if (age < 18) {
      throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas')
    }
    return `Olá ${name}, seja bem vindo(a) à AuTrybe`
  } catch (error){
    return error.message
  }
}

console.log(studentRegister('bruno',));
console.log(studentRegister('bruno',17));
console.log(studentRegister('bruno',24));