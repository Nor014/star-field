'use strict';

const canvas = document.getElementsByTagName('canvas')[0],
  ctx = canvas.getContext('2d'),
  colors = ['#ffffff', '#ffe9c4', '#d4fbff'],
  amountOfStars = Math.random() * (400 - 200) + 200;

canvas.style.background = 'black'

//очищаем канвас, рисуем круги с заданными параметрамми в зависимости от случайного количества, распологаем случайным образом на полотне 
function createStar(amountOfStars) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 1; i <= amountOfStars; i++) {

    let sizeRandom = Math.random() * 1.1;
    let colorRandom = colors[(Math.random() * (colors.length - 1)).toFixed(0)];

    ctx.beginPath();
    ctx.fillStyle = colorRandom;
    ctx.globalAlpha = Math.random() * (1 - 0.8) + 0.8;
    ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, sizeRandom, 0, Math.PI * 2, false);
    ctx.fill();
  }
}

canvas.addEventListener('click', onClick);

function onClick() {
  createStar(amountOfStars)
}





