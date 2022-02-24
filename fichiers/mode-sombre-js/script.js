function darkMode() {
  const element = document.body;
  element.classList.toggle("dark-mode");

  const elContainer = document.querySelector(".container");
  elContainer.classList.toggle("dark-container");

  const elTitreP = document.querySelector(".titre-principal");
  elTitreP.classList.toggle("dark-titre-principal");

  const elTitreS = document.querySelectorAll(".titre-secondaire");
  for (let i = 0; i < elTitreS.length; i++)
    elTitreS[i].classList.toggle("dark-titre-secondaire");
}
