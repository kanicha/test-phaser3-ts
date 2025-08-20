System.register(["phaser"], function (exports_1, context_1) {
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
    var phaser_1, MyScene;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (phaser_1_1) {
                phaser_1 = phaser_1_1;
            }
        ],
        execute: function () {
            MyScene = /** @class */ (function (_super) {
                __extends(MyScene, _super);
                function MyScene() {
                    return _super.call(this, 'main') || this;
                }
                MyScene.prototype.create = function () {
                    this.add.text(100, 100, 'Chrome 66 OK!', { font: '24px Arial', color: '#ffffff' });
                };
                return MyScene;
            }(phaser_1.default.Scene));
            new phaser_1.default.Game({
                type: phaser_1.default.CANVAS,
                width: 800,
                height: 600,
                scene: MyScene,
                backgroundColor: '#000'
            });
        }
    };
});
