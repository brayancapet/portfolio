"use strict";

var mail = document.querySelector("#exampleInputEmail1");
var mdp = document.querySelector("#exampleInputPassword1");
var nom = document.querySelector("#exampleInputName1");
var creer = document.querySelector(".creer_compte");

function creer_compte(e) {
  e.preventDefault();

  var compte = {};

  compte.mail = mail.value;
  compte.mdp = mdp.value;
  compte.nom = nom.value;

  var comptes = localStorage.getItem("account");
  if (comptes) {
    comptes = JSON.parse(comptes, "UTF-8");
  } else {
    var comptes = [];
  }

  comptes.push(compte);

  save_compte(comptes);
  document.location.reload();
}

creer.addEventListener("click", creer_compte);
