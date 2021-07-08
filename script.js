// instantiating values
const canvas = document.getElementById("canvas");
canvas.height = document.body.clientHeight;
canvas.width = document.body.clientWidth;
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const ctx = canvas.getContext("2d");
const SCALE = 10;
const COLS = Math.floor(WIDTH / SCALE) + 2;
const ROWS = Math.floor(HEIGHT / SCALE) + 2;
var cAutomata = [];
var cAutomataTmp = [];

function initSterile() {
  for (var r = 0; r <= ROWS; r++) {
    cAutomataTmp[r] = new Array();
    for (var c = 0; c <= COLS; c++) {
      cAutomataTmp[r][c] = 0;
    }
  }
}

function initMatrix() {
  // reset matrix
  cAutomata = new Array();
  cAutomataTmp = new Array();
  // create empty temp 2d array and an automata 2d array with randomly places cells
  for (var r = 0; r <= ROWS; r++) {
    cAutomata[r] = new Array();
    cAutomataTmp[r] = new Array();
    for (var c = 0; c <= COLS; c++) {
      cAutomataTmp[r][c] = 0;
      var randVal = Math.floor(Math.random() * 2);
      cAutomata[r][c] = randVal;
      if (randVal == 1) {
        draw(r + 1, c + 1);
      }
    }
  }
}

function draw(x, y) {
  // x is horizontal axis
  // y is vertical axis
  // fill at (x, y) for (w, h)
  ctx.fillRect(SCALE * (x - 1), SCALE * (y - 1), SCALE, SCALE);
}

function neighbourSum(r, c) {
  return (
    cAutomata[r - 1][c] +
    cAutomata[r - 1][c - 1] +
    cAutomata[r - 1][c + 1] +
    cAutomata[r][c - 1] +
    cAutomata[r][c + 1] +
    cAutomata[r + 1][c] +
    cAutomata[r + 1][c + 1] +
    cAutomata[r + 1][c - 1]
  );
}

function nextStep() {
  // reset tempArray
  initSterile();
  // reset canvas
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  for (var r = 1; r <= ROWS - 1; r++) {
    for (var c = 1; c <= COLS - 1; c++) {
      var sumOfNeighbors = neighbourSum(r, c);

      if (cAutomata[r][c] == 1) {
        if (sumOfNeighbors == 2 || sumOfNeighbors == 3) {
          cAutomataTmp[r][c] = 1;
          // cell continues to live
          ctx.fillStyle = "rgb(100,100,100)";
          // draw accepts (x, y)
          draw(c, r);
        }
      } else {
        if (sumOfNeighbors == 3) {
          cAutomataTmp[r][c] = 1;
          // new cell born
          ctx.fillStyle = "rgb(255,255,255)";
          draw(c, r);
        }
      }
    }
  }

  cAutomata = cAutomataTmp.slice();
}

initMatrix();
setInterval(nextStep, 50);
