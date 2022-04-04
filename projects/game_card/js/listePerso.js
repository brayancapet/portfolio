"use strict";

var table = document.querySelector(".table");
var tbody = document.querySelector("tbody");
recupListePersos();

function listePerso(personnages) {
  personnages.forEach((element) => {
    var firstTr = document.createElement("tr");
    tbody.appendChild(firstTr);

    var firstTh = document.createElement("th");
    firstTr.appendChild(firstTh);
    firstTh.scope = "row";
    firstTh.textContent = "⚔";

    var firstTd = document.createElement("td");
    firstTr.appendChild(firstTd);
    firstTd.textContent = element.nom;

    var secondTd = document.createElement("td");
    firstTr.appendChild(secondTd);
    secondTd.textContent = element.classe;

    var thirdTd = document.createElement("td");
    firstTr.appendChild(thirdTd);
    thirdTd.textContent = element.arme;
  });
}

listePerso(personnages);
