// let i = ['1','2','3','4']

// const calculateGrade = (i) => {

//   try {
//     checkNumber(i);
//     calculator(i)

//   } catch(error) {
//     return error.message
//   }
// }


// const checkNumber = (i) => {
//   for (let index = 0; index < i.length; index += 1) {  
//     if (isNaN(number[index])){ 
//       throw new Error('É necessário digitar um número')
//     } else if (isNaN(isNaN)){
//       throw new Error('É necessário digitar um número')
//     }
//   }
// }

// const calculator = (i) => {
//   let media = 0
//   for (let index = 0; index < i.length; index += 1) {
//     let converter = parseInt(i[index])
//     media += converter;
//   }
//   media = media /4
//   console.log(media);
// }


// calculator(i);


const validateAverage = (n1, n2, n3, n4) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number') {
    throw new Error('Atenção! Os valores devem ser numéricos');
  }
}

const calculateAverage = (n1, n2, n3, n4) => {
  try {
    validateAverage(n1, n2, n3, n4);
    let sum = n1 + n2 + n3 + n4;
    let media = sum / 4;
    return media;
  } catch (error) {
    return error.message;
  }  
}
console.log(calculateAverage(5, 6, 7,'9')) // Atenção! Os valores devem ser numéricos