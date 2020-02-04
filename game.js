let config = {
  width: 480,
  height: 320,
  backgroundColor: 0x000000,
  physics: {
    default: "arcade",
    arcade: {
      debug: true
    }
  },
  scene: Scene1,
  scale: {
    mode: Phaser.Scale.SHOW_ALL
  }
}

let game = new Phaser.Game(config);