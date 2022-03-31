//////////For NAV open/close/////////////////
const menu = document.querySelector(".btn-menu");
const back = document.querySelector(".nav-back");
const nav = document.querySelector(".nav");

let navIsOpen = false;

menu.addEventListener("click", () => {
  navIsOpen = true;
  checkNav();
});

back.addEventListener("click", () => {
  navIsOpen = false;
  checkNav();
});

const checkNav = () => {
  if (!navIsOpen) {
    nav.classList.toggle("hidden");
    menu.classList.add("hidden");
  }

  if (navIsOpen) {
    nav.classList.toggle("hidden");
    menu.classList.add("hidden");
  }
};
////////////////////////////////////////
