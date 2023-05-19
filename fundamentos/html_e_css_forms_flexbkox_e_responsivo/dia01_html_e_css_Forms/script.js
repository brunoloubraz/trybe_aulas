// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

//exercicio1
const href = (event) => {
  event.preventDefault();
}

hrefLink.addEventListener('click', href)

//exercicio2

inputCheckbox.addEventListener('click', (event) => {
  event.preventDefault();
});

// exercicio3
const textA = (event) => {
  const tecla = event.key;
  if (tecla !== 'a') {
    event.preventDefault();
  }
};
inputText.addEventListener('keypress', textA);


// inputText.addEventListener('keypress', (event) => {
//   const character = event.key;˜
//   if (character !== 'a') {
//     event.preventDefault();
//   }
// });