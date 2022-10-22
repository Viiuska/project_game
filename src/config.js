//help & guidance https://www.youtube.com/watch?v=O6zoZAq86io
//help & guidance https://phaser.io/tutorials/making-your-first-phaser-3-game/part1
//help & guidance https://www.youtube.com/playlist?list=PLoN_ejT35AEhY4icjiEJ5t2qdunwmQj1R

import Phaser from "phaser";
import PreloadScene from "./PreloadScene";
import GameScene from "./GameScene";
import GameSceneMedium from "./GameSceneMedium";
import GameSceneHard from "./GameSceneHard";

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.SMOOTH, //SMOOTH option would stretch the image
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 1000
  },
  scene: [PreloadScene, GameScene, GameSceneMedium, GameSceneHard],
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 300
      },
      debug: false
    }
  }
};
export { config };
