import Phaser from "phaser";

class MyGame extends Phaser.Scene {
    private logo!: Phaser.Physics.Arcade.Image;

    constructor() {
        super("mygame");
    }

    preload() {
        console.log("GAME >> Preload Start");
        this.load.setBaseURL("https://labs.phaser.io");
        this.load.image("sky", "assets/skies/space3.png");
        this.load.image("logo", "assets/sprites/phaser3-logo.png");

        this.load.audio("pop", "assets/audio/SoundEffects/p-ping.mp3");

        console.log("GAME >> Preload Ended");
    }

    create() {
        console.log("GAME >> Create Start");

        this.add.image(400, 300, "sky");

        this.spawnLogo(400, 100)

        // クリックイベントの登録
        this.input.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
            this.spawnLogo(pointer.x, pointer.y);
        });

        console.log("GAME >> Create Ended");
    }

    spawnLogo(x: number, y: number) {
        const logo = this.physics.add.image(x, y, "logo");
        logo.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-200, 200));
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        this.sound.play("pop", { volume: 0.1 });
    }

    update() {}
}

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.CANVAS,
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