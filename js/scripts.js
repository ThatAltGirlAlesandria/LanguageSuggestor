//Business Logic

function hideAnswers(){
  document.getElementById("c-sharp").setAttribute("class", "hidden");
  document.getElementById("java-script").setAttribute("class", "hidden");
  document.getElementById("react").setAttribute("class", "hidden");
}

function submitAnswers(e){
  e.preventDefault();
  hideAnswers();
  let inputTypeOfEnviornment = document.querySelector("input[name='type-of-enviornment']:checked").value
  let inputDifficulty = document.querySelector("input[name='difficulty']:checked").value
  let inputReading = document.querySelector("input[name='reading']:checked").value
  let inputAnimal = document.querySelector("input[name='animal']:checked").value
  let inputSearch = document.querySelector("input[name='search']:checked").value


  if (inputTypeOfEnviornment === 'corporate' && (inputDifficulty === 'very' || inputSearch === 'bing')){
    document.getElementById('c-sharp').removeAttribute("class");
  } else if (inputTypeOfEnviornment === 'startup' && (inputReading === 'average' || inputAnimal === 'cats')){
    document.getElementById('react').removeAttribute("class");
  } else {
    document.getElementById('java-script').removeAttribute("class");
  }
}

function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

//User Interface

window.onload = function (){
  let button = document.querySelector(".dark-mode");
  button.onclick = darkMode;
}

window.addEventListener("load", function() {
  const form = document.getElementById("quiz-questions");
  form.addEventListener("submit", submitAnswers)
});