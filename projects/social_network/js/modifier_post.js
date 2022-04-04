"use strict";

var str = window.location.href;
var url = new URL(str);
var indice = url.searchParams.get("post");

var postes = localStorage.getItem("str_postes");
if (postes) {
  postes = JSON.parse(postes);
}

var post = postes[indice];

document.querySelector("#post_title").value = post.titre;
document.querySelector("textarea").value = post.contenu;

document
  .querySelector(".modifier")
  .addEventListener("click", function (object) {
    var post = {};

    post.titre = document.querySelector("#post_title").value;
    post.contenu = document.querySelector("textarea").value;

    postes.splice(indice, 1, post);

    var str_postes = JSON.stringify(postes);
    localStorage.setItem("str_postes", str_postes);
    document.location.reload();
  });
