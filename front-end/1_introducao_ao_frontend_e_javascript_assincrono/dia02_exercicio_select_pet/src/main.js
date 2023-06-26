import './styles.css';

const btnDog = document.querySelector('#dog');
const btnCat = document.querySelector('#cat');
const btnRandom = document.querySelector('#surprise');
const boxImage = document.querySelector('#box');
const insideText = document.querySelector('h3');
const dogApi = 'https://dog.ceo/api/breeds/image/random';
const catApi = 'https://api.thecatapi.com/v1/images/search';

btnDog.addEventListener('click', () => {
  fetch(dogApi)
    .then((response) => response.json())
    .then((data) => {
      boxImage.appendChild(document.createElement('img'));
      insideText.innerHTML = '';
      document.querySelector('img').src = '';
      document.querySelector('img').src = data.message;
      document.querySelector('img').width = 300;
    });
});

btnCat.addEventListener('click', () => {
  fetch(catApi)
    .then((response) => response.json())
    .then((data) => {
      boxImage.appendChild(document.createElement('img'));
      insideText.innerHTML = '';
      document.querySelector('img').src = '';
      document.querySelector('img').src = data[0].url;
      document.querySelector('img').width = 300;
    });
});

btnRandom.addEventListener('click', () => {
  fetch(dogApi)
    .then((response) => response.json())
    .then((data) => {
      boxImage.appendChild(document.createElement('img'));
      insideText.innerHTML = '';
      document.querySelector('img').src = '';
      document.querySelector('img').src = data.message;
      document.querySelector('img').width = 300;
    });
  fetch(catApi)
    .then((response) => response.json())
    .then((data) => {
      boxImage.appendChild(document.createElement('img'));
      insideText.innerHTML = '';
      document.querySelector('img').src = '';
      document.querySelector('img').src = data[0].url;
      document.querySelector('img').width = 300;
    });
});
