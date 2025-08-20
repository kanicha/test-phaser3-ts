export {}; // ← これ必要！

import Phaser from 'phaser';

class MyScene extends Phaser.Scene {
  constructor() {
    super('main');
  }

  create() {
    this.add.text(100, 100, 'Chrome 66 OK!', { font: '24px Arial', color: '#ffffff' });
  }
}

new Phaser.Game({
  type: Phaser.CANVAS,
  width: 800,
  height: 600,
  scene: MyScene,
  backgroundColor: '#000'
});