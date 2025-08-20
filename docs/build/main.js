System.register([], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var MyGame, config;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            MyGame = /** @class */ (function (_super) {
                __extends(MyGame, _super);
                function MyGame() {
                    return _super.call(this, "mygame") || this;
                }
                MyGame.prototype.preload = function () {
                    console.log("GAME >> Preload Start");
                    this.load.setBaseURL("https://labs.phaser.io");
                    this.load.image("sky", "assets/skies/space3.png");
                    this.load.image("logo", "assets/sprites/phaser3-logo.png");
                    this.load.audio("pop", "assets/audio/SoundEffects/p-ping.mp3");
                    console.log("GAME >> Preload Ended");
                };
                MyGame.prototype.create = function () {
                    var _this = this;
                    console.log("GAME >> Create Start");
                    this.add.image(400, 300, "sky");
                    this.spawnLogo(400, 100);
                    // クリックイベントの登録
                    this.input.on("pointerdown", function (pointer) {
                        _this.spawnLogo(pointer.x, pointer.y);
                    });
                    console.log("GAME >> Create Ended");
                };
                MyGame.prototype.spawnLogo = function (x, y) {
                    var logo = this.physics.add.image(x, y, "logo");
                    logo.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-200, 200));
                    logo.setBounce(1, 1);
                    logo.setCollideWorldBounds(true);
                    this.sound.play("pop", { volume: 0.1 });
                };
                MyGame.prototype.update = function () { };
                return MyGame;
            }(Phaser.Scene));
            config = {
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
        }
    };
});
