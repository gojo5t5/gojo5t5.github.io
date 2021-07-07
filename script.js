var canvas = document.getElementById("golCanvas");
canvas.width = $(document).width();
canvas.height = $(document).height();
var WIDTH = canvas.width;
var HEIGHT = canvas.height;
var ctx = canvas.getContext("2d");
var LEN = 10;
var x = Math.floor(WIDTH / LEN);
var y = HEIGHT / LEN;
var myGol;
var golTmp;

function initTmp() {
  for (var xVal = 0; xVal <= x + 2; xVal++) {
    golTmp[xVal] = new Array();
    for (var yVal = 0; yVal <= y + 2; yVal++) {
      golTmp[xVal][yVal] = 0;
    }
  }
}

function initMatrix() {
  // reset matrix
  myGol = new Array();
  golTmp = new Array();

  for (var xVal = 0; xVal <= x + 2; xVal++) {
    myGol[xVal] = new Array();
    golTmp[xVal] = new Array();
    for (var yVal = 0; yVal <= y + 2; yVal++) {
      golTmp[xVal][yVal] = 0;
      var randVal = Math.floor(Math.random() * 2);
      myGol[xVal][yVal] = randVal;
      if (randVal == 1) {
        draw(xVal + 1, yVal + 1);
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

  for (var xVal = 1; xVal <= x + 1; xVal++) {
    for (var yVal = 1; yVal <= y + 1; yVal++) {
      var neighbourSum =
        myGol[xVal - 1][yVal] +
        myGol[xVal - 1][yVal - 1] +
        myGol[xVal - 1][yVal + 1] +
        myGol[xVal][yVal - 1] +
        myGol[xVal][yVal + 1] +
        myGol[xVal + 1][yVal] +
        myGol[xVal + 1][yVal + 1] +
        myGol[xVal + 1][yVal - 1];
      if (myGol[xVal][yVal] == 1) {
        if (neighbourSum == 2 || neighbourSum == 3) {
          golTmp[xVal][yVal] = 1;
          ctx.fillStyle = "rgb(100,100,100)";
          draw(xVal, yVal);
        }
      } else {
        if (neighbourSum == 3) {
          golTmp[xVal][yVal] = 1;
          ctx.fillStyle = "rgb(255,255,255)";
          draw(xVal, yVal);
        }
      }
    }
  }

  myGol = golTmp.slice();
}

initMatrix();
setInterval(nextStep, 50);
