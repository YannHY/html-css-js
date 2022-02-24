const btn = document.querySelector(".dark-mode-btn");
const theme = document.querySelector("#theme-clair");

btn.addEventListener("click", function () {
  if (theme.getAttribute("href") == "style.css") {
    theme.href = "dark-theme.css";
  } else {
    theme.href = "style.css";
  }
});
