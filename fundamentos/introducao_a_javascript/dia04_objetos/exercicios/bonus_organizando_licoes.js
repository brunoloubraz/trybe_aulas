let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adiciona = (itemModificado, chave, valorDaChave) => {
  itemModificado[chave] = valorDaChave;
}

console.log(adiciona(lesson2,'turno','noite'));
//console.log(lesson2);

const listarKeys = (objeto) => {
  return Object.keys(objeto)
}

//console.log(listarKeys(lesson1));

const countObj = (objeto) => {
  return Object.keys(objeto).length;
}

//console.log(countObj(lesson1));

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (objeto) => {
  return Object.values(objeto);
}

//console.log(listValues(lesson2));



let allLessons = Object.assign({}, { lesson1: lesson1, lesson2: lesson2, lesson3: lesson3, });
//console.log(allLessons);


const returnStudents = (objeto) => {
  let chave = Object.keys(objeto);
  let total = 0;
  for (index in chave){
   total  = total + objeto[chave[index]].numeroEstudantes
  }
  return total;
}

//console.log(returnStudents(allLessons));

function getValueByNumber(obj, number) {
  return Object.values(obj)[number];
}
//console.log(getValueByNumber(lesson1, 2));


function verifyPair(obj, key, value) {
  let entries = Object.entries(obj);
  let isEqual = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) 
    isEqual = true;
  }
  return isEqual;
}


console.log(verifyPair(lesson2,'professor','Carlos'));

//console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
//console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
