import "./style.css"

const image = document.querySelector('#picture')
const textImage = document.querySelector('h3')
const botao = document.querySelector('#botao')


botao.addEventListener('click' ,(event) => {

  event.preventDefault();
  const randomChoice = parseInt(Math.random()*562)
  fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .then(response => response.json())
    .then(data => {
      image.src = data[randomChoice].images.lg
      textImage.innerHTML = data[randomChoice].name
    });
    
  })
