class Star {
  constructor() {
    // give random coordinates
    this.x = random(-WIDTH, WIDTH);
    this.y = random(-HEIGHT, HEIGHT);
    this.z = random(WIDTH);
    this.pz = this.z;
    // assign random color
    // this.color = [random(255), random(255), random(255)];
    this.color = [100, 100, 100];

    // when a star flies out of the screen, respawn it
    this.update = function () {
      this.z -= speed;
      if (this.z < 1 || this.z > WIDTH) {
        this.respawn();
      }
    };

    this.respawn = function () {
      this.x = random(-WIDTH, WIDTH);
      this.y = random(-HEIGHT, HEIGHT);
      this.z = random(WIDTH);
      this.pz = this.z;
      this.color = [random(255), random(255), random(255)];
    };

    this.show = function () {
      noStroke();
      fill(this.color);

      var sx = map(this.x / this.z, 0, 1, 0, WIDTH);
      var sy = map(this.y / this.z, 0, 1, 0, HEIGHT);

      var r = map(this.z, 0, WIDTH, 8, 0);
      ellipse(sx, sy, r, r);

      var px = map(this.x / this.pz, 0, 1, 0, WIDTH);
      var py = map(this.y / this.pz, 0, 1, 0, HEIGHT);
      this.pz = this.z;

      stroke(this.color);
      line(px, py, sx, sy);
    };
  }
}
