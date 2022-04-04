var createCard = require("./main.js");
var savePersos = require("./main.js");

function createPerso() {
  var personnage = {};
  personnage.nom = document.querySelector("#nom").value;
  personnage.classe = document.querySelector("#classe").value;
  personnage.arme = document.querySelector("#arme").value;
  personnage.force = document.querySelector("#force").value;
  personnage.intelligence = document.querySelector("#intelligence").value;
  personnage.agilite = document.querySelector("#agilite").value;
  personnage.endurance = document.querySelector("#endurance").value;

  recupListePersos();
  personnages.push(personnage);
  savePersos(personnages);
  document.location.reload();
}

function supPerso(i) {
  recupListePersos();
  personnages.splice(i, 1);
  savePersos(personnages);
  document.location.reload();
}

function recupListePersos() {
  var personnages = localStorage.getItem("tabPersos");
  if (personnages) {
    personnages = JSON.parse(personnages, "UTF-8");
  } else {
    var personnages = [];
  }
  return personnages;
}
