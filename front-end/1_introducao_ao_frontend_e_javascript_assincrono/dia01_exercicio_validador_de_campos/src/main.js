import './style.css';
// import validator from 'validator';

const button = document.querySelector('button');
const h3 = document.querySelector('h3');
const answer = document.querySelector('#answer');
const email = 'mozinho@gmail.com';
const cpfEmail = document.querySelector('#cpfOrEmail');
const cpf = '123.456.789-00';

button.addEventListener('click', () => {
  // validator.isEmail('mozinho@gmail.com')
  if (answer.value === email && cpfEmail.value === 'Email') {
    h3.innerHTML = 'A validação retornou True';
    return h3.innerHTML;
  }
  if (answer.value === cpf && cpfEmail.value === 'CPF') {
    h3.innerHTML = 'A validação retornou True';
    return h3.innerHTML;
  }
  h3.innerHTML = 'A validação retornou False';
});

// passwordBtnEl.addEventListener('click', () => {
//   const randomPassword = nanoid();
//   displayPasswordEl.innerHTML = randomPassword;
// });
