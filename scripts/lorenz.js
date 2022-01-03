const canvaslorenz = document.getElementById("lorenz");
const ctxl = canvaslorenz.getContext("2d");
canvaslorenz.height = cell[0].clientHeight;
canvaslorenz.width = cell[0].clientWidth;
let width = canvaslorenz.width;
let height = canvaslorenz.height;
let points1 = new Array();
ctxl.fillStyle = "rgb(0, 0, 0)";
ctxl.fillRect(0, 0, width, height);

var d = 28,
  h = 0.001,
  t = -6,
  x0 = 0,
  y0 = 1,
  z0 = 10,
  x1,
  y1,
  z1,
  cx = width/2,
  cy = height/2,
  scale = 5,
  n = 2000000000000,
  i = 0;

var interval = setInterval(function () {
  if (i < n) {
    for (var k = 0; k < 20; k += 1) {
      x1 = x0 + h * t * (x0 - y0);
      y1 = y0 + h * (-x0 * z0 + d * x0 - y0);
      z1 = z0 + h * (x0 * y0 - z0);

      ctxl.strokeStyle =
        "hsl(" +
        Math.abs(x1) * 10 +
        "," +
        Math.abs(y1) * 10 +
        "%," +
        Math.abs(z1) * 2 +
        "%)";

      ctxl.beginPath();
      ctxl.moveTo(cx + x0 * scale, cy + y0 * scale);
      ctxl.lineTo(cx + x1 * scale, cy + y1 * scale);
      ctxl.stroke();

      x0 = x1;
      y0 = y1;
      z0 = z1;

      i += 1;
    }
  } else {
    clearInterval(interval);
  }
}, 1);


// document
//   .getElementById("lorenz-restart")
//   .addEventListener("click", function () {
//     initLorenz();
//   });