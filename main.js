import { Fighter, drawHealthBars } from './game.js';

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
  if (fighter1.isAttacking && isColliding(fighter1, fighter2)) {
    fighter2.health = Math.max(0, fighter2.health - 1);
  }
  if (fighter2.isAttacking && isColliding(fighter2, fighter1)) {
    fighter1.health = Math.max(0, fighter1.health - 1);
  }



function isColliding(f1, f2) {
  const margin = 10;
  return f1.x < f2.x + f2.width + margin &&
         f1.x + f1.width + margin > f2.x &&
         f1.y < f2.y + f2.height &&
         f1.y + f1.height > f2.y;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fighter1.draw(ctx);
  drawHealthBars(ctx, canvas, fighter1, fighter2);

  fighter2.draw(ctx);
}

function gameLoop() {




  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
