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
