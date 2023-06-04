function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

window.onload = function (){
  let button = document.querySelector(".dark-mode");
  button.onclick = darkMode;
}