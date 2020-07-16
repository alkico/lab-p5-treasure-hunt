class Game {
  constructor() {
    this.player = new Player();
    this.treasure = new Treasure();
  }

  drawGrid() {
    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(i, 0, i, HEIGHT);
      line(WIDTH, i, 0, i);
    }
  }

  preload() {
    this.player.preload();
    this.treasure.preload();
  }

  draw() {
    this.player.draw();
    this.treasure.draw();
    this.player.keyPressed();
    this.treasureFound();
  }

  treasureFound() {
    if (
      this.player.col === this.treasure.col &&
      this.player.row === this.treasure.row
    ) {
      this.treasure.preload();
    }
  }
}

class Player {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.img;
  }
  preload() {
    this.img = loadImage("../assets/character-down.png");
  }
  moveUp() {
    this.row -= 10;
    this.img = loadImage("../assets/character-up.png");
  }
  moveDown() {
    this.row += 10;
    this.img = loadImage("../assets/character-down.png");
  }
  moveLeft() {
    this.col -= 10;
    this.img = loadImage("../assets/character-left.png");
  }
  moveRight() {
    this.col += 10;
    this.img = loadImage("../assets/character-right.png");
  }

  draw() {
    image(this.img, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }

  keyPressed() {
    if (keyIsDown(40)) {
      this.moveDown();
    }
    if (keyIsDown(38)) {
      this.moveUp();
    }
    if (keyIsDown(39)) {
      this.moveRight();
    }
    if (keyIsDown(37)) {
      this.moveLeft();
    }
  }
}

class Treasure {
  constructor() {
    this.row;
    this.col;
    this.img;
  }

  setRandomPosition() {
    this.col = Math.round((Math.random() * WIDTH) / SQUARE_SIDE) * SQUARE_SIDE;
    this.row = Math.round((Math.random() * WIDTH) / SQUARE_SIDE) * SQUARE_SIDE;
  }
  preload() {
    this.img = loadImage("../assets/treasure.png");
    this.setRandomPosition();
  }

  draw() {
    image(this.img, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}
