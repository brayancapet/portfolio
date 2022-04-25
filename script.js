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
const skill_center = document.querySelector(".skill-center");
const skill_side = document.querySelectorAll(".skill-side");
const projets_header = document.querySelector(".projets-header");

const firstObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      entry.target.classList.toggle(
        "slide-in-from-right",
        entry.isIntersecting
      );
    }),
  {
    treshold: 1,
  }
);
firstObserver.observe(presentation_right);

const secondObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      entry.target.classList.toggle("slide-in-from-left", entry.isIntersecting);
    }),
  {
    treshold: 1,
  }
);
secondObserver.observe(presentation_left);

const thirdObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      entry.target.classList.toggle("appear-from-top", entry.isIntersecting);
    }),
  {
    treshold: 1,
  }
);
projets_card.forEach((card) => {
  thirdObserver.observe(card);
});
thirdObserver.observe(projets_header);

const fourthObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      entry.target.classList.toggle("left-effect", entry.isIntersecting);
    }),
  {
    treshold: 1,
  }
);
skill_side.forEach((skill) => {
  console.log(skill);
  fourthObserver.observe(skill);
});

const fifthObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      entry.target.classList.toggle("up-effect", entry.isIntersecting);
    }),
  {
    treshold: 1,
  }
);
fifthObserver.observe(skill_center);
