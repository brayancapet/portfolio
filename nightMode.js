"use strict";

const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
});