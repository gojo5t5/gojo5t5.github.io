const MAZECANVAS = document.getElementById("maze");
MAZECANVAS.height = HEIGHT;
MAZECANVAS.width = WIDTH;

var mazectx = MAZECANVAS.getContext("2d");
var mazeimg = document.getElementById('mazeimg');
drawImageScaled(mazeimg, mazectx)
// var cols, rows;
// var w = 20;
// var grid = [];
// var current;
// var stack = [];

// function setupmaze() {
//     const mazecanvas = document.getElementById("gol");

//   mazecols = floor(width / w);
//   mazerows = floor(height / w);

//   for (var j = 0; j < rows; j++) {
//     for (var i = 0; i < cols; i++) {
//       var cell = new Cell(i, j);
//       grid.push(cell);
//     }
//   }
//   current = grid[0];
// }

// function drawmaze() {
//   background(0);
//   for (var cell of grid) {
//     cell.show();
//   }

//   current.visited = true;
//   current.highlight();

//   var next = current.checkNeighbors();
//   if (next) {
//     next.visited = true;
//     stack.push(current);
//     removeWalls(current, next);
//     current = next;
//   } else if (stack.length > 0) {
//     current = stack.pop();
//   }
// }

// function index(i, j) {
//   if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
//     return -1;
//   }
//   return i + j * cols;
// }

// function removeWalls(a, b) {
//   var x = a.i - b.i;
//   if (x === 1) {
//     a.walls[3] = false;
//     b.walls[1] = false;
//   } else if (x === -1) {
//     a.walls[1] = false;
//     b.walls[3] = false;
//   }
//   var y = a.j - b.j;
//   if (y === 1) {
//     a.walls[0] = false;
//     b.walls[2] = false;
//   } else if (y === -1) {
//     a.walls[2] = false;
//     b.walls[0] = false;
//   }
// }

// setupmaze();
// setInterval(drawmaze, 50);

