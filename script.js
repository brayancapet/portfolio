"use strict";

let typed = new Typed(".auto-type", {
  strings: ["Brayan.", "un dev.", "curieux.", "passionné.", "à l'écoute."],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

let my_projects = [
  {
    image: "./images/game-card.png",
    titre: "Carte de personnage pop culture",
    description:
      "Créer des cartes de vos personnages préférés et stockez les sur votre local storage.<br />",
    stack: `<i class="fa-brands fa-html5"></i>
  <i class="fa-brands fa-css3-alt"></i>
  <i class="fa-brands fa-js"></i>`,
    href: "./projects/game_card/index.html",
  },
  {
    image: "./images/social_network.png",
    titre: "Mon 'Réseau Social'.",
    description:
      "Créer un compte, connectez-vous, laissez un post, modifiez le et effacez le.<br />",
    stack: `<i class="fa-brands fa-html5"></i>
    <i class="fa-brands fa-css3-alt"></i>
    <i class="fa-brands fa-js"></i>`,
    href: "./projects/social_network/index.html",
  },
  {
    image: "./images/melo.png",
    titre: "Site vitrine pour un food truck",
    description:
      "Site web responsif, avec la localisation du food truck, son menu, la provenance de ses produits, ainsi que des informations sur la propriétaire.<br />",
    stack: `<i class="fa-brands fa-html5"></i>
    <i class="fa-brands fa-css3-alt"></i>
    <i class="fa-brands fa-js"></i>`,
    href: "./projects/melo/index.html",
  },
];

let card = document.getElementById("card");
let img = document.querySelector(".image-projet");
let header_project = document.querySelector(".project-header");
let project_paragraph = document.querySelector(".project-paragraph");
var previous = document.querySelector(".previous");
var next = document.querySelector(".next");
var picture_redirection = document.querySelector("#a-pic");
var count = 0;

function setProject(object) {
  img.src = object.image;
  header_project.textContent = `${object.titre}`;
  project_paragraph.innerHTML = `${object.description} ${object.stack}`;
  picture_redirection.href = `${object.href}`;
}

next.addEventListener("click", function () {
  if (count < my_projects.length - 1) {
    count = count + 1;
    console.log(count);
    setProject(my_projects[count]);
  } else {
    count = 0;
    console.log(count);
    setProject(my_projects[count]);
  }
});

previous.addEventListener("click", function () {
  if (count > 0) {
    count = count - 1;
    console.log(count);
    setProject(my_projects[count]);
  } else {
    count = my_projects.length - 1;
    console.log(count);
    setProject(my_projects[count]);
  }
});
