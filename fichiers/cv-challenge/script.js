"use strict";

// Dark mode
const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-clair");

btn.addEventListener("click", function () {
  if (theme.getAttribute("href") == "style.css") {
    theme.href = "dark-theme.css";
  } else {
    theme.href = "style.css";
  }
});

// Date
const anneeEl = document.querySelector(".annee");
const currentYear = new Date().getFullYear();
anneeEl.textContent = currentYear;

// Fenêtre modale Tags
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".tag");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Fenêtre modale Contact
const modalContact = document.querySelector(".modal-contact");
const overlayContact = document.querySelector(".overlay-contact");
const btnCloseContact = document.querySelector(".close-modal-contact");
const btnOpenContact = document.querySelector(".contact");

const openModalContact = function () {
  modalContact.classList.remove("hidden-contact");
  overlayContact.classList.remove("hidden-contact");
};

const closeModalContact = function () {
  modalContact.classList.add("hidden-contact");
  overlayContact.classList.add("hidden-contact");
};

btnOpenContact.addEventListener("click", openModalContact);
btnCloseContact.addEventListener("click", closeModalContact);
overlayContact.addEventListener("click", closeModalContact);
