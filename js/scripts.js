function hideAnswers(){
  document.getElementById("c-sharp").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("react").setAttribute("class", "hidden");
}

function submitAnswers(e){
  e.preventDefault();
  hideAnswers();
  let inputTypeOfEnviornment = document.querySelector("input[name='type-of-enviornment']:checked").value
  let inputDifficulty = document.querySellector("input[name='difficulty':]:checked").value
  let inputReading = document.querySelector("input[name='reading']:checked").value
  let inputAnimal = document.querySelector("input[name='animal']checked").value
  let inputSearch = document.querySelector("input[name='search']checked").value
}

function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

window.onload = function (){
  let button = document.querySelector(".dark-mode");
  button.onclick = darkMode;
}