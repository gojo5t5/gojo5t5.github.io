let stars = [];
let angle = (angle_speed = 0),
  speed = 1;
let stars_number = WIDTH > HEIGHT ? WIDTH * 2 : HEIGHT * 2;

function setup() {
  createCanvas(WIDTH, HEIGHT).parent("starfield");

  for (let i = 0; i < stars_number; i++) {
    stars[i] = new Star();
  }
}

function reset() {
  angle = angle_speed = 0;
  speed = 1;
  stars_number = WIDTH > HEIGHT ? WIDTH * 2 : HEIGHT * 2;
}

function draw() {
  document
    .getElementById("starfield-restart")
    .addEventListener("click", function () {
      reset();
    });
  angle += angle_speed;
  background(0);
  translate(WIDTH / 2, HEIGHT / 2);
  rotate(angle);
  for (let star of stars) {
    star.update();
    star.show();
  }
}

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      speed++;
      break;
    case DOWN_ARROW:
      speed--;
      break;
    case LEFT_ARROW:
      angle_speed -= PI / 360;
      break;
    case RIGHT_ARROW:
      angle_speed += PI / 360;
      break;
    case ENTER:
      speed = 2;
      angle_speed = 0;
      break;
    default:
      return false;
  }
}

function mousePressed() {
  angle_speed = map(mouseY, 0, HEIGHT, -PI / 60, PI / 60);
  speed = map(mouseX, 0, WIDTH, -20, 20);
}
