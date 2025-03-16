import { Fighter } from './game.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const fighter1 = new Fighter(100, canvas.height - 150, 'blue');
const fighter2 = new Fighter(canvas.width - 150, canvas.height - 150, 'red');

const keys = {};

document.addEventListener('keydown', (e) => {
  if (!keys[e.key]) {
    keys[e.key] = true;
    if (e.key === 'q') fighter1.attack();
    if (e.key === '/') fighter2.attack();
  }
});

document.addEventListener('keyup', (e) => {
  delete keys[e.key];
});

function update() {
  if (keys['w']) fighter1.move(0, -1);
  if (keys['s']) fighter1.move(0, 1);
  if (keys['a']) fighter1.move(-1, 0);
  if (keys['d']) fighter1.move(1, 0);
  
  if (keys['ArrowUp']) fighter2.move(0, -1);
  if (keys['ArrowDown']) fighter2.move(0, 1);
  if (keys['ArrowLeft']) fighter2.move(-1, 0);
  if (keys['ArrowRight']) fighter2.move(1, 0);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fighter1.draw(ctx);
  fighter2.draw(ctx);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
