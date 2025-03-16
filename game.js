export class Fighter {
  constructor(x, y, color, controls) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 80;
    this.color = color || 'blue';
    this.controls = controls || {};
    this.speed = 5;
    this.isAttacking = false;
  }

  move(dx, dy) {
    this.x += dx * this.speed;
    this.y += dy * this.speed;
  }

  attack() {
    this.isAttacking = true;
    setTimeout(() => { this.isAttacking = false; }, 500);
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    if (this.isAttacking) {
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 3;
      ctx.strokeRect(this.x - 10, this.y - 10, this.width + 20, this.height + 20);
    }
  }
}
export function drawHealthBars(ctx, canvas, fighter1, fighter2) {
  if (fighter1.health === undefined) fighter1.health = 100;
  if (fighter2.health === undefined) fighter2.health = 100;
  const barWidth = canvas.width / 3;
  const barHeight = 20;

  // Fighter1 health bar (left)
  ctx.fillStyle = 'gray';
  ctx.fillRect(20, 20, barWidth, barHeight);
  ctx.fillStyle = 'green';
  ctx.fillRect(20, 20, barWidth * fighter1.health / 100, barHeight);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(20, 20, barWidth, barHeight);

  // Fighter2 health bar (right)
  ctx.fillStyle = 'gray';
  ctx.fillRect(canvas.width - barWidth - 20, 20, barWidth, barHeight);
  ctx.fillStyle = 'green';
  ctx.fillRect(canvas.width - barWidth - 20, 20, barWidth * fighter2.health / 100, barHeight);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(canvas.width - barWidth - 20, 20, barWidth, barHeight);
}

