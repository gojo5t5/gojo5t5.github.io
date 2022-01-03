// set gol to a theme matching the user system's preferences
function getTheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  } else {
    return "light";
  }
}
const theme = getTheme();
const STYLES = {
  dark: {
    reset: "rgb(0, 0, 0)",
    survive: "rgb(100, 100, 100)",
    spawn: "rgb(255, 255, 255)",
  },
  light: {
    reset: "rgb(255, 255, 255)",
    survive: "rgb(150, 150, 150)",
    spawn: "rgb(0, 0, 0)",
  },
};

// instantiating values
// set canvas to fill the cell it is in
const canvas = document.getElementById("gol");
const cell = document.getElementsByClassName("cell");
canvas.height = cell[0].clientHeight;
canvas.width = cell[0].clientWidth;
// set up grid
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const ctx = canvas.getContext("2d");
const SCALE = 5;
const COLS = Math.floor(WIDTH / SCALE) + 2;
const ROWS = Math.floor(HEIGHT / SCALE) + 2;
var cAutomata = [];
var cAutomataTmp = [];

// initialise a sterile template
function initSterile() {
  for (var r = 0; r <= ROWS; r++) {
    cAutomataTmp[r] = new Array();
    for (var c = 0; c <= COLS; c++) {
      cAutomataTmp[r][c] = 0;
    }
  }
}

// initialise matrix that runs the simulation
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
        drawgol(r + 1, c + 1);
      }
    }
  }
}

// helper funtion that drawgolsthe cells
function drawgol(x, y) {
  // x is horizontal axis
  // y is vertical axis
  // fill at (x, y) for (w, h)
  ctx.fillRect(SCALE * (x - 1), SCALE * (y - 1), SCALE, SCALE);
}

// helper function that finds the neighbor sum
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

// finds next step of the board
function nextStep() {
  // reset tempArray
  initSterile();
  // reset canvas
  ctx.fillStyle = STYLES[theme]["reset"];
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  for (var r = 1; r <= ROWS - 1; r++) {
    for (var c = 1; c <= COLS - 1; c++) {
      var sumOfNeighbors = neighbourSum(r, c);

      if (cAutomata[r][c] == 1) {
        if (sumOfNeighbors == 2 || sumOfNeighbors == 3) {
          cAutomataTmp[r][c] = 1;
          // cell continues to live
          ctx.fillStyle = STYLES[theme]["survive"];
          // drawgol accepts (x, y)
          drawgol(c, r);
        }
      } else {
        if (sumOfNeighbors == 3) {
          cAutomataTmp[r][c] = 1;
          // new cell born
          ctx.fillStyle = STYLES[theme]["spawn"];
          drawgol(c, r);
        }
      }
    }
  }

  cAutomata = cAutomataTmp.slice();
}

initMatrix();
setInterval(nextStep, 50);

// listen for button event
document.getElementById("gol-restart").addEventListener("click", function () {
  initMatrix();
});
