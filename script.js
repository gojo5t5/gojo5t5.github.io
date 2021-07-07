var canvas = document.getElementById("canvas");
canvas.width = $(document).width();
canvas.height = $(document).height();
var WIDTH = canvas.width;
var HEIGHT = canvas.height;
var ctx = canvas.getContext("2d");
var LEN = 10;
var x = Math.floor(WIDTH / LEN);
var y = HEIGHT / LEN;
var cAutomata;
var cAutomataTmp;

function initTmp() {
  for (var r = 0; r <= x + 2; r++) {
    cAutomataTmp[r] = new Array();
    for (var c = 0; c <= y + 2; c++) {
      cAutomataTmp[r][c] = 0;
    }
  }
}

function initMatrix() {
  // reset matrix
  cAutomata = new Array();
  cAutomataTmp = new Array();

  for (var r = 0; r <= x + 2; r++) {
    cAutomata[r] = new Array();
    cAutomataTmp[r] = new Array();
    for (var c = 0; c <= y + 2; c++) {
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
  ctx.fillRect(LEN * (x - 1), LEN * (y - 1), LEN, LEN);
}

function nextStep() {
  // reset tempArray
  initTmp();
  // reset canvas
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  for (var r = 1; r <= x + 1; r++) {
    for (var c = 1; c <= y + 1; c++) {
      var neighbourSum =
        cAutomata[r - 1][c] +
        cAutomata[r - 1][c - 1] +
        cAutomata[r - 1][c + 1] +
        cAutomata[r][c - 1] +
        cAutomata[r][c + 1] +
        cAutomata[r + 1][c] +
        cAutomata[r + 1][c + 1] +
        cAutomata[r + 1][c - 1];
      if (cAutomata[r][c] == 1) {
        if (neighbourSum == 2 || neighbourSum == 3) {
          cAutomataTmp[r][c] = 1;
          ctx.fillStyle = "rgb(100,100,100)";
          draw(r, c);
        }
      } else {
        if (neighbourSum == 3) {
          cAutomataTmp[r][c] = 1;
          ctx.fillStyle = "rgb(255,255,255)";
          draw(r, c);
        }
      }
    }
  }

  cAutomata = cAutomataTmp.slice();
}

initMatrix();
setInterval(nextStep, 50);
