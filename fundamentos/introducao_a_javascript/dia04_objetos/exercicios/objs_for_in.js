
// item 1
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// console.log("Bem vinda, " + info.personagem);

// item 2
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// console.log("Bem vinda, " + info.personagem);
// info.recorrente = 'sim'
// console.log(info);


//item 3/4
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// // console.log("Bem vinda, " + info.personagem);
// info.recorrente = 'sim'
// // console.log(info);

// // let keys = Object.keys(info);
// // console.log(keys);

// for (index in info){
//   console.log(info[index]);
// }


//item 5
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// info.recorrente = 'sim'

// let info2 = {
//   personagem: 'Tio patinhas',
//   origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//   nota: 'O último MacPatinhas'
// }

// info2.recorrente = 'sim'

// for (index in info){
//     console.log(info[index] + " e " +info2[index]);
//   }




//leitura de objetos

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};


// item 1

// let fullName = leitor.nome + " " + leitor.sobrenome

// console.log('O livro favorito de ' + fullName + ' se chama ' + leitor.livrosFavoritos[0].titulo);

// item 2

// let novoLivro = Object.assign({},leitor.livrosFavoritos)
// leitor.livrosFavoritos.titulo = 'Harry Potter e o Prisioneiro de Azkaban';
// leitor.livrosFavoritos.autor = 'JK Rowling';
// leitor.livrosFavoritos.editora = 'Rocco';
// console.log(leitor);

// ou tbm pode ser feito por push 

leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  },
);

// console.log(leitor);

// item 3

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livro(s) favorito(s)');
