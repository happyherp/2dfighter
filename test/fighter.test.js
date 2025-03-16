import test from 'node:test';
import assert from 'node:assert';
import { Fighter } from '../game.js';

test('Fighter move', (t) => {
  const fighter = new Fighter(0, 0, 'blue');
  fighter.move(1, 1);
  assert.strictEqual(fighter.x, 5);
  assert.strictEqual(fighter.y, 5);
});

test('Fighter attack', async (t) => {
  const fighter = new Fighter(0, 0, 'blue');
  fighter.attack();
  assert.strictEqual(fighter.isAttacking, true);
  await new Promise(resolve => setTimeout(resolve, 600));
  assert.strictEqual(fighter.isAttacking, false);
});
