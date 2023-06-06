
// // const newEmployees = (func) => {
// //   const employees = {
// //     id1: `${func('Pedro Guerra')}`, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
// //     id2: `${func('Luiza Drumond')}`, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
// //     id3: `${func('Carla Paiva')}`, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
// //   }
// //   return employees;
// // };

// // const email = (name) => {
// //   return `${name}@trybe.com`
// // }


// // // const mail = emails.forEach((email,index) => {
// // //   emails[index] = `${emails[index]}@trybe.com.br`
// // // });

// // console.log(newEmployees(email));

// const employeeGenerator = (fullName) => {
//   const email = fullName.toLowerCase().replace(' ', '_');
//   return { fullName, email: `${email}@trybe.com` };
// };

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),
//     id2: callback('Luiza Drumond'),
//     id3: callback('Carla Paiva'),
//   };
//   return employees;
// };

// console.log(newEmployees(employeeGenerator));

// //SORTEADOR DE LOTERIA

// // const sorteio = (numero) => {
// //   const randomNumber = Math.floor(Math.random() * (6 - 1) + 1)
// //   if (numero === randomNumber) {
// //     return 'Parabéns, você ganhou'
// //   }
// //   else {
// //     return 'Tente novamente'
// //   }
// // }

// // console.log(sorteio(5));

// const numberChecker = (myNumber, number) => myNumber === number;

// const lotteryResult = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);

//   return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// };

// console.log(lotteryResult(2, numberChecker));



// //Corretor automático de exame

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const corretor = (rightAnswer, answers, action) => {
  let soma = 0;
  for (let index = 0; index < rightAnswer.length; index += 1) {
    soma += action(rightAnswer[index], answers[index]);

  }
  return soma
}

const compare = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

console.log(corretor(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));