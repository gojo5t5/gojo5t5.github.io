// let x = 0.01;
// let y = 0;
// let z = 0;
// let a = 10;
// let b = 28;
// let c = 8.0 / 3.0;
// let points = new Array();

// const canvaslorenz = document.getElementById("lorenz-canvas");
// canvaslorenz.height = HEIGHT;
// canvaslorenz.width = WIDTH;
// const lorenzctx = canvaslorenz.getContext("2d");

// function reset() {
//   x = 0.01;
//   y = 0;
//   z = 0;
//   a = 10;
//   b = 28;
//   c = 8.0 / 3.0;
//   points = new Array();
// }

// function drawLorenz() {
//   document
//     .getElementById("lorenz-restart")
//     .addEventListener("click", function () {
//       reset();
//     });
//   // lorenzctx.clearColor(0, 0, 0, 0);
//   lorenzctx.clearRect(0,0,canvas.width,canvas.height)

//   var color = [Math.random(), Math.random(), Math.random(), 1];
//   let dt = 0.01;
//   let dx = a * (y - x) * dt;
//   let dy = (x * (b - z) - y) * dt;
//   let dz = (x * y - c * z) * dt;
//   x = x + dx;
//   y = y + dy;
//   z = z + dz;

//   points.push(new p5.Vector(x, y, z));

//   lorenzctx.translate(0, 0, -80);
//   let camX = map(mouseX, 0, width, -200, 200);
//   let camY = map(mouseY, 0, height, -200, 200);
//   // lorenzctx.camera(
//   //   camX,
//   //   camY,
//   //   height / 2.0 / sin((PI * 30.0) / 180.0),
//   //   0,
//   //   0,
//   //   0,
//   //   0,
//   //   1,
//   //   0
//   // );
//   lorenzctx.scale(5,5);
//   lorenzctx.fillsyle = "none";

//   let hu = 0;
//   lorenzctx.beginPath();
//   lorenzctx.moveTo(WIDTH/2, HEIGHT/2);

//   for (let v of points) {
//     lorenzctx.strokeStyle = 'white';
//     vertex(v.x, v.y, v.z);

//     lorenzctx.lineTo(v.x, v.y);
//     //PVector offset = PVector.random3D();
//     //offset.mult(0.1);
//     //v.add(offset);
//     hu += 1;
//     if (hu > 255) {
//       hu = 0;
//     }
//   }
//   lorenzctx.closePath();
//   lorenzctx.stroke();

// }

// setInterval(drawLorenz, 50);
