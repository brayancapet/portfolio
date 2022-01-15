"use strict";

const menu = document.querySelector(".navbar_menu");
const mobileMenuBtn = document.querySelector(".navbar_toggle");

// hamburger menu
const mobileMenu = () => {
  menu.classList.toggle("active");
  return;
};
mobileMenuBtn.addEventListener("click", mobileMenu);
