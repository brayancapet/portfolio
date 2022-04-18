"use strict";

// let typed = new Typed(".auto-type", {
//   strings: ["Brayan.", "un dev.", "curieux.", "passionné.", "à l'écoute."],
//   typeSpeed: 150,
//   backSpeed: 150,
//   loop: true,
// });

const presentation_right = document.querySelector(".presentation-right-div");
const presentation_left = document.querySelector(".presentation-left-div");
const projets_card = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;
  console.log(scrollPos);
  if (scrollPos >= 580 && scrollPos <= 600) {
    presentation_right.classList.add("slide-in-from-right");
    presentation_left.classList.add("slide-in-from-left");
  }

  // if (scrollPos >= 1000 && scrollPos <= 1020) {
  //   projets_card.classList.add("projets-animation");
  // }
});

console.log(projets_card);
