const btnShow = document.querySelector(".solution");
const answer = document.querySelector(".reponse");

const clickBtn = function () {
  if (answer.classList.toggle("cache")) {
    btnShow.textContent = "Voir la réponse";
  } else {
    btnShow.textContent = "Cacher la réponse";
  }
};

btnShow.addEventListener("click", clickBtn);
