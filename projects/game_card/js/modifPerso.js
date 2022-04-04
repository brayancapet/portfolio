var str = window.location.href;

var url = new URL(str);

var indice = url.searchParams.get("perso");

var personnages = recupListePersos();
var perso = personnages[indice];

document.getElementById("nom").value = perso.nom;
document.getElementById("classe").value = perso.classe;
document.getElementById("arme").value = perso.arme;
document.getElementById("intelligence").value = perso.intelligence;
document.getElementById("endurance").value = perso.endurance;
document.getElementById("agilite").value = perso.agilite;
document.getElementById("force").value = perso.force;

document
  .querySelector("#modifier")
  .addEventListener("click", function (object) {
    var person = {};

    person.nom = document.getElementById("nom").value;
    person.classe = document.getElementById("classe").value;
    person.arme = document.getElementById("arme").value;
    person.intelligence = document.getElementById("intelligence").value;
    person.endurance = document.getElementById("endurance").value;
    person.agilite = document.getElementById("agilite").value;
    person.force = document.getElementById("force").value;
    personnages.splice(indice, 1, person);

    savePersos(personnages);
    document.location.reload();
  });
