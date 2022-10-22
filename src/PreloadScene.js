import Phaser, { Scene } from "phaser";

class PreloadScene extends Scene {
  constructor() {
    super("preload");
  }

  preload() {
    this.load.image("img_sky", "src/assets/sky.png");
    this.load.image("easy_button", "src/assets/easyButton.png");
    this.load.image("medium_button", "src/assets/mediumButton.png");
    this.load.image("hard_button", "src/assets/hardButton.png");
  }
  create() {
    //https://phaser.discourse.group/t/how-to-stretch-background-image-on-full-screen/1839
    let image = this.add.image(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2,
      "img_sky"
    );
    let scaleX = this.cameras.main.width / image.width;
    let scaleY = this.cameras.main.height / image.height;
    let scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(0);

    let text = this.add.text(400, 300, "Welcome\n", {
      fontSize: "64px",
      fill: "#000"
    });
    text.setOrigin(0.5);

    text = this.add.text(
      400,
      320,
      "Collect stars and wacth out for bombs and black stars",
      {
        fontSize: "24px",
        fill: "#000"
      }
    );
    text.setOrigin(0.5);

    text = this.add.text(400, 400, " Click to start the Game", {
      fontSize: "24px",
      fill: "#000"
    });
    text.setOrigin(0.5);

    var levelEasy = this.add.sprite(150, 500, "easy_button").setInteractive();
    levelEasy.on(
      "pointerup",
      function (pointer) {
        this.scene.start("game");
      },
      this
    );

    var levelMedium = this.add
      .sprite(400, 500, "medium_button")
      .setInteractive();
    levelMedium.on(
      "pointerup",
      function (pointer) {
        this.scene.start("gameMedium");
      },
      this
    );

    var levelHard = this.add.sprite(650, 500, "hard_button").setInteractive();
    levelHard.on(
      "pointerup",
      function (pointer) {
        this.scene.start("gameHard");
      },
      this
    );
  }
}
export default PreloadScene;
