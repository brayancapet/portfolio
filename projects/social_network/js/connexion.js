"use strict";

var mail = document.querySelector("#exampleInputEmail1");
var mdp = document.querySelector("#exampleInputPassword1");
var connexion = document.querySelector(".connexion");
var info_connexion = document.querySelector("#info_connexion");

var comptes = localStorage.getItem("account");
if (comptes) {
  comptes = JSON.parse(comptes, "UTF-8");
} else {
  alert("il n'y a aucun comptes sur votre appareil, veuillez en créer");
}

connexion.addEventListener("click", function (e) {
  e.preventDefault();

  var user_mail = mail.value;
  var user_mdp = mdp.value;

  comptes.forEach((element) => {
    if (user_mail == element.mail && user_mdp == element.mdp) {
      info_connexion.textContent = `Bienvenue, ${element.nom}😎`;
    }
  });
  // document.location.reload();
});
