"use strict";

var newpost = document.querySelector(".post_container");
var feed_container = document.querySelector(".feed_container");
var publier = document.querySelector(".publier");
var textarea = document.querySelector("textarea");
var post_title = document.querySelector("#post_title");

// var postes = [];

function get_post() {
  var postes = localStorage.getItem("str_postes");
  if (postes) {
    postes = JSON.parse(postes);
  } else {
    postes = {};
  }

  return postes;
}

function create_post() {
  var postes = localStorage.getItem("str_postes");
  if (postes) {
    postes = JSON.parse(postes);
  } else {
    postes = [];
  }
  var poste = {};
  var contenu_poste = textarea.value;
  var titre_poste = post_title.value;

  var my_div = document.createElement("div");
  my_div.classList.add("card", "m-3");
  my_div.style.width = "18rem";
  my_div.innerHTML = `<div class="card-body">
  <h5 class="card-title">${titre_poste}</h5>
  <p class="card-text">
    ${contenu_poste}
  </p>
  <a href="#" class="btn btn-primary">Modifier</a>
  <a href="#" class="btn btn-danger">Supprimer</a>
  </div>`;

  poste.titre = titre_poste;
  poste.contenu = contenu_poste;
  postes.push(poste);

  var str_postes = JSON.stringify(postes);
  localStorage.setItem("str_postes", str_postes);

  feed_container.appendChild(my_div);
  document.location.reload();
}

function afficher_post() {
  var postes = localStorage.getItem("str_postes");
  if (postes) {
    postes = JSON.parse(postes);
  } else {
    postes = {};
  }

  for (let i = 0; i < postes.length; i++) {
    var my_div = document.createElement("div");
    my_div.classList.add("card", "m-3");
    my_div.style.width = "18rem";
    my_div.innerHTML = `<div class="card-body">
      <h5 class="card-title">${postes[i].titre}</h5>
      <p class="card-text">
        ${postes[i].contenu}
      </p>
      <a href="./modifier_post.html?post=${i}" class="btn btn-primary" >Modifier</a>
      <a href="#" class="btn btn-danger" onclick="supprimer_post(${i})">Supprimer</a>
      </div>`;
    feed_container.appendChild(my_div);
  }
}

function supprimer_post(i) {
  var postes = localStorage.getItem("str_postes");
  if (postes) {
    postes = JSON.parse(postes);
  } else {
    postes = {};
  }
  postes.splice(i, 1);

  var str_postes = JSON.stringify(postes);
  localStorage.setItem("str_postes", str_postes);
  document.location.reload();
}

afficher_post();
publier.addEventListener("click", create_post);
