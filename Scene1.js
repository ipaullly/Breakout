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
    let ball = this.physics.add.sprite(config.width*0.5, config.height-25, 'ball');
    ball.body.setVelocity(150, -150);
    ball.setCollideWorldBounds(true);
    ball.setBounce(1);

    let paddle = this.physics.add.sprite(this.world.width*0.5, this.world.height-5, 'paddle');
    paddle.setAnchor(0.5, 1);
    paddle.body.immovable = true;
  }

  update() {
    this.physics.add.collider(ball, paddle);
    paddle.x = this.input.x || this.world.width*0.5;
  }
}