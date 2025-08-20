import Phaser from "phaser";

class MyGame extends Phaser.Scene {
    private logo!: Phaser.Physics.Arcade.Image;

    constructor() {
        super("mygame");
    }

    preload() {
        this.load.setBaseURL("https://labs.phaser.io");
        this.load.image("sky", "assets/skies/space3.png");
        this.load.image("logo", "assets/sprites/phaser3-logo.png");
    }

    create() {
        this.add.image(400, 300, "sky");

        this.logo = this.physics.add.image(400, 100, "logo");
        this.logo.setVelocity(200, 200);
        this.logo.setBounce(1, 1);
        this.logo.setCollideWorldBounds(true);
    }

    update() {}
}

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: { gravity: {
                y: 200,
                x: 0
            } }
    },
    scene: MyGame
};

new Phaser.Game(config);