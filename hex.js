'use strict';

const body = document.querySelector('body');
const btn = document.querySelector('.button-65');
const affichage = document.querySelector('#hex-color');

const color = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

btn.addEventListener('click', function changeColor() {
  let hex = '#';

  for (let i = 0; i <= 5; i++) {
    let randomColor = Math.floor(Math.random() * color.length);
    hex += color[randomColor];
    console.log(hex);
  }
  affichage.textContent = hex;
  body.style.backgroundColor = hex;
});
