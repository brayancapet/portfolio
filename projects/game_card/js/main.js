var create_button = document.querySelector("#creer");
var card_container = document.querySelector(".card-container");

var personnages = localStorage.getItem("tabPersos");
if (personnages) {
  personnages = JSON.parse(personnages, "UTF-8");
} else {
  var personnages = [];
}

function createCard(object, i) {
  var myDiv = document.createElement("div");

  myDiv.classList.add("card");
  myDiv.classList.add("card-element");

  var myImg = document.createElement("img");
  myImg.classList.add("card-img-top", "mb-2");
  myDiv.appendChild(myImg);

  var myH5 = document.createElement("h5");
  myH5.textContent = object.nom;
  myDiv.appendChild(myH5);

  var myUl = document.createElement("ul");
  myUl.classList.add("list-group");
  myDiv.appendChild(myUl);

  var classe = document.createElement("li");
  classe.classList.add("list-group-item");
  classe.textContent = `classe : ${object.classe}`;
  myUl.appendChild(classe);

  var arme = document.createElement("li");
  arme.classList.add("list-group-item");
  arme.textContent = `arme : ${object.arme}`;
  myUl.appendChild(arme);

  var endurance = document.createElement("li");
  endurance.classList.add("list-group-item");
  endurance.textContent = `endurance : ${object.endurance}`;
  myUl.appendChild(endurance);

  var force = document.createElement("li");
  force.classList.add("list-group-item");
  force.textContent = `force : ${object.force}`;
  myUl.appendChild(force);

  var agilite = document.createElement("li");
  agilite.classList.add("list-group-item");
  agilite.textContent = `agilite : ${object.agilite}`;
  myUl.appendChild(agilite);

  var intelligence = document.createElement("li");
  intelligence.classList.add("list-group-item");
  intelligence.textContent = `intelligence : ${object.intelligence}`;
  myUl.appendChild(intelligence);

  var selectionner = document.createElement("a");
  selectionner.classList.add("btn", "btn-primary");
  selectionner.textContent = "Modifier";
  selectionner.setAttribute("href", "./html/modifPerso.html?perso=" + i);
  myDiv.appendChild(selectionner);

  var supprimer = document.createElement("a");
  supprimer.setAttribute("onclick", "supPerso(" + i + ")");
  supprimer.classList.add("btn", "btn-danger");
  supprimer.textContent = "Supprimer";

  myDiv.appendChild(supprimer);

  card_container.appendChild(myDiv);

  switch (object.classe) {
    case "Pirate":
      myImg.src = "./images/pirate.jpg";
      break;
    case "Ninja":
      myImg.src = "./images/konoha.jpg";
      break;
    case "Pokémon":
      myImg.src = "./images/pokémon_logo.png";
      break;
    case "Dragon Ball":
      myImg.src = "./images/dbz.jpg";
      break;
    case "Seven Deadly Sins":
      myImg.src = "./images/meliodas.png";
      break;
    case "Star Wars":
      myImg.src = "./images/starWars.png";
      break;
    case "Rick and Morty":
      myImg.src = "./images/rickLogo.jpg";
      break;
    case "Berserk":
      myImg.src = "./images/guts.jpg";
      break;
    default:
      myImg.src = "./images/meliodas.png";
  }
}

for (let i = 0; i < personnages.length; i++) {
  createCard(personnages[i], i);
}

function savePersos(personnages) {
  var tabPersos = JSON.stringify(personnages);
  localStorage.setItem("tabPersos", tabPersos);
}

module.exports = createCard;
module.exports = savePersos;
