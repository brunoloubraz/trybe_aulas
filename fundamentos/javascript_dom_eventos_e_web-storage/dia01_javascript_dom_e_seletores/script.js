const h3titulo = document.querySelectorAll(".emergency-tasks h3"); 
const h3titulo2 = document.querySelectorAll(".no-emergency-tasks h3"); 
const h3body = document.querySelector(".emergency-tasks")
const h3body2 = document.querySelector(".no-emergency-tasks")
const footer = document.querySelector("footer")


for (let index = 0; index < h3titulo.length; index++) {
  h3titulo[index].style.backgroundColor = "#A439F3"
  h3titulo2[index].style.backgroundColor = "#232525"

}
const header = document.getElementsByTagName("header");
header[0].style.backgroundColor = "green";

h3body.style.backgroundColor = "#FF9F84"
h3body2.style.backgroundColor = "#F9DB5E"

footer.style.backgroundColor = "#003533"