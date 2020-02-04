class Scene1 extends Phaser.Scene{
  constructor(){
    super('breakout');
  }

  preload() {
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.load.image('ball', 'img/ball.png');
    this.load.image('paddle', 'img/paddle.png');
  }

  create() {
    this.ball = this.physics.add.sprite(config.width*0.5, config.height-25, 'ball');
    this.ball.body.setVelocity(150, -150);
    this.ball.setCollideWorldBounds(true);
    this.ball.setBounce(1);

    this.paddle = this.physics.add.sprite(config.width*0.5, config.height-5, 'paddle');
    this.paddle.body.immovable = true;
  }

  update() {
    this.physics.add.collider(this.ball, this.paddle);
    this.paddle.x = this.input.x || config.width*0.5;
  }
}