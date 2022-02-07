"use strict";

var card_body = document.querySelector(".card-body");
var quote_button = document.querySelector(".btn");

var text = document.createElement("p");
text.classList.add("card-text");
card_body.append(text);

var character = document.createElement("p");
character.classList.add("card-text");
card_body.append(character);

quote_button.addEventListener("click", function () {
  fetch("https://animechan.vercel.app/api/random")
    .then((res) => res.json())
    .then(
      (data) =>
        (text.innerHTML = `${data.quote} <br> <strong>${data.character}, ${data.anime}</strong>`)
    );
});
