//help & guidance https://www.youtube.com/watch?v=O6zoZAq86io
//help & guidance https://phaser.io/tutorials/making-your-first-phaser-3-game/part1
// help & guidance https://www.youtube.com/playlist?list=PLoN_ejT35AEhY4icjiEJ5t2qdunwmQj1R

import Phaser, { Scene } from "phaser";

var player;
var groupStars;
var groupBlackStars;
var groupBombs;
var groupPlateforms;
var movingPlatformFirst;
var movingPlatformSecond;
var keyboard;
var soundSample;
var clicked = false;
var scoreValue = 0;
var scoreText;
var finalScore;
var gameOverText;
var gameOver = false;

class GameSceneHard extends Scene {
  constructor() {
    super("gameHard");
  }

  preload() {
    this.load.image("img_skyHard", "src/assets/skyHard.png");
    this.load.image("img_platform", "src/assets/platform.png");
    this.load.image(
      "img_platformHorizontal",
      "src/assets/platformHorizontal.png"
    );
    this.load.image("img_star", "src/assets/star.png");
    this.load.image("img_bomb", "src/assets/bomb.png");
    this.load.image("red", "src/assets/red.png");
    this.load.image("img_starBlack", "src/assets/starBlack.png");
    this.load.spritesheet("img_dude", "src/assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48
    });
    //guidance: https://www.youtube.com/watch?v=SRqKOccMWbc
    this.load.audio("ping", "src/assets/audio/ping.mp3");
    this.load.audio("bombExplosion", "src/assets/audio/bomb.mp3");
    this.load.audio("minus", "src/assets/audio/minus.mp3");
  }

  create() {
    //https://phaser.discourse.group/t/how-to-stretch-background-image-on-full-screen/1839
    let image = this.add.image(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2,
      "img_skyHard"
    );
    let scaleX = this.cameras.main.width / image.width;
    let scaleY = this.cameras.main.height / image.height;
    let scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(0);

    groupPlateforms = this.physics.add.staticGroup();

    groupPlateforms.create(70, 980, "img_platform");
    groupPlateforms.create(200, 980, "img_platform");
    groupPlateforms.create(350, 980, "img_platform");
    groupPlateforms.create(500, 980, "img_platform");
    groupPlateforms.create(650, 980, "img_platform");
    groupPlateforms.create(800, 980, "img_platform");

    groupPlateforms.create(400, 850, "img_platform");
    groupPlateforms.create(650, 800, "img_platform");
    groupPlateforms.create(800, 700, "img_platform");
    groupPlateforms.create(600, 550, "img_platform");
    groupPlateforms.create(300, 250, "img_platform");
    groupPlateforms.create(10, 550, "img_platform");
    groupPlateforms.create(50, 200, "img_platform");
    groupPlateforms.create(550, 100, "img_platform");
    groupPlateforms.create(750, 270, "img_platform");

    movingPlatformFirst = this.physics.add.sprite(
      100,
      400,
      "img_platformHorizontal"
    );

    movingPlatformFirst.setImmovable(true);
    movingPlatformFirst.body.allowGravity = false;

    movingPlatformSecond = this.physics.add.staticGroup();
    movingPlatformSecond = this.physics.add.image(100, 650, "img_platform");
    movingPlatformSecond.setImmovable(true);
    movingPlatformSecond.body.allowGravity = false;
    movingPlatformSecond.setVelocityX(50);

    player = this.physics.add.sprite(100, 750, "img_dude");
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
      key: "turn_left",
      frames: this.anims.generateFrameNumbers("img_dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "img_dude", frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: "turn_right",
      frames: this.anims.generateFrameNumbers("img_dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    keyboard = this.input.keyboard.createCursorKeys();

    groupStars = this.physics.add.group();
    for (var i = 0; i < 10; i++) {
      var coordX = 70 + 70 * i;
      groupStars.create(coordX, 20, "img_star");
    }

    groupStars.children.iterate(function iterator(star_i) {
      var bounce = Phaser.Math.FloatBetween(0.4, 0.8);
      star_i.setBounceY(bounce);
    });

    groupBlackStars = this.physics.add.group();
    for (var n = 0; n < 3; n++) {
      var cordX = 200 + 200 * n;
      groupBlackStars.create(cordX, 10, "img_starBlack");
    }

    groupBlackStars.children.iterate(function iterator(blackStar_i) {
      blackStar_i.setBounce(1, 1);
      blackStar_i.setCollideWorldBounds(true);
      blackStar_i.setVelocity(Phaser.Math.Between(-200, 200), 20);
    });

    groupBombs = this.physics.add.group();
    scoreText = this.add.text(16, 16, "score: 0", {
      fontSize: "32px",
      fill: "#000"
    });

    gameOverText = this.add.text(400, 200, "Game Over", {
      fontSize: "64px",
      fill: "#000"
    });
    gameOverText.setOrigin(0.5);
    gameOverText.visible = false;

    finalScore = this.add.text(150, 250, "" + scoreValue, {
      fontSize: "54px",
      fill: "#000"
    });
    finalScore.visible = false;

    this.physics.add.collider(player, movingPlatformFirst);
    this.physics.add.collider(groupStars, movingPlatformFirst);
    this.physics.add.collider(groupBlackStars, movingPlatformFirst);
    this.physics.add.collider(groupBombs, movingPlatformFirst);

    this.physics.add.collider(player, movingPlatformSecond);
    this.physics.add.collider(groupStars, movingPlatformSecond);
    this.physics.add.collider(groupBlackStars, movingPlatformSecond);
    this.physics.add.collider(groupBombs, movingPlatformSecond);

    this.physics.add.collider(player, groupPlateforms);
    this.physics.add.collider(groupStars, groupPlateforms);
    this.physics.add.collider(groupBlackStars, groupPlateforms);
    this.physics.add.collider(groupBombs, groupPlateforms);

    this.physics.add.overlap(player, groupStars, collectStars, null, this);
    this.physics.add.overlap(
      player,
      groupBlackStars,
      collectBlackStars,
      null,
      this
    );
    this.physics.add.collider(player, groupBombs, bombDamage, null, this);
  }

  update() {
    if (gameOver) {
      return;
    }
    if (keyboard.left.isDown) {
      player.setVelocityX(-160);
      player.anims.play("turn_left", true);
    } else if (keyboard.right.isDown) {
      player.setVelocityX(160);
      player.anims.play("turn_right", true);
    } else {
      player.setVelocityX(0);
      player.anims.play("turn");
    }

    if (keyboard.up.isDown && player.body.touching.down) {
      player.setVelocityY(-330);
    }

    //guidance: https://www.thepolyglotdeveloper.com/2020/09/include-touch-cursor-gesture-events-phaser-game/
    if (!this.input.activePointer.isDown && clicked === true) {
      movingPlatformFirst.setData(
        "positionX",
        this.input.activePointer.position.x
      );
      clicked = false;
    } else if (this.input.activePointer.isDown && clicked === false) {
      clicked = true;
    }

    if (
      Math.abs(
        movingPlatformFirst.x - movingPlatformFirst.getData("positionX")
      ) <= 10
    ) {
      movingPlatformFirst.x = movingPlatformFirst.getData("positionX");
    } else if (
      movingPlatformFirst.x < movingPlatformFirst.getData("positionX")
    ) {
      movingPlatformFirst.x += 1;
    } else if (
      movingPlatformFirst.x > movingPlatformFirst.getData("positionX")
    ) {
      movingPlatformFirst.x -= 1;
    }

    if (movingPlatformSecond.x >= 350) {
      movingPlatformSecond.setVelocityX(-50);
    } else if (movingPlatformSecond.x <= 100) {
      movingPlatformSecond.setVelocityX(50);
    }
  }
}

function collectStars(player, star) {
  star.disableBody(true, true);
  soundSample = this.sound.add("ping");
  soundSample.play();
  scoreValue += 10;
  scoreText.setText("Score: " + scoreValue);
  if (groupStars.countActive(true) === 0) {
    groupStars.children.iterate(function iterator(star_i) {
      star_i.enableBody(true, star_i.x, 0, true, true);
    });

    var x;
    if (player.x < 400) {
      x = Phaser.Math.Between(400, 800);
    } else {
      x = Phaser.Math.Between(0, 400);
    }

    var bomb = groupBombs.create(x, 18, "img_bomb");
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    bomb.allowGravity = false;
  }
}

function collectBlackStars(player, blackStar) {
  blackStar.disableBody(true, true);
  soundSample = this.sound.add("minus");
  soundSample.play();
  scoreValue -= 10;
  scoreText.setText("Score: " + scoreValue);
  if (groupBlackStars.countActive(true) === 0) {
    groupBlackStars.children.iterate(function iterator(blackStar_i) {
      blackStar_i.enableBody(true, blackStar_i.y, 0, true, true);
    });

    var y;
    if (player.y < 400) {
      y = Phaser.Math.Between(400, 800);
    } else {
      y = Phaser.Math.Between(0, 400);
    }
  }
}

function bombDamage(player, bomb) {
  soundSample = this.sound.add("bombExplosion");
  soundSample.play();
  this.physics.pause();
  player.setTint(0xff0000);
  player.anims.play("turn");
  gameOver = true;
  gameOverText.visible = true;
  finalScore.setText("Your score: " + scoreValue + "\n\nClick to continue");
  finalScore.visible = true;
  this.input.on(
    "pointerup",
    function (pointer) {
      this.scene.start("preload");
    },
    this
  );
}

export default GameSceneHard;
