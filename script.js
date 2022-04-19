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
const skill_left = document.querySelector(".skill-left");
const skill_center = document.querySelector(".skill-center");
const skill_right = document.querySelector(".skill-right");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;
  console.log(scrollPos);
  if (scrollPos >= 580 && scrollPos <= 600) {
    presentation_right.classList.add("slide-in-from-right");
    presentation_left.classList.add("slide-in-from-left");
  }

  if (scrollPos >= 1000 && scrollPos <= 1020) {
    for (let i = 0; i < projets_card.length; i++) {
      projets_card[i].classList.add("projets-animation");
    }
  }

  if (scrollPos >= 1850 && scrollPos <= 1870) {
    skill_left.classList.add("skill-effect-left");
    skill_center.classList.add("skill-effect-center");
    skill_right.classList.add("skill-effect-right");
  }
});

console.log(projets_card);
