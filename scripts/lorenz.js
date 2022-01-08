const LORCANVAS = document.getElementById("lorenz");
LORCANVAS.height = HEIGHT;
LORCANVAS.width = WIDTH;

var lorctx = LORCANVAS.getContext("2d");
var lorimage = document.getElementById('lorimage');
drawImageScaled(lorimage, lorctx);


// if (lorGL === null) {
//   alert(
//     "Unable to initialize WebGL. Your browser or machine may not support it."
//   );
// }

// function clearLORbg() {
//   if (getTheme() == "dark") {
//     lorGL.clearColor(0.0, 0.0, 0.0, 1.0);
//   } else {
//     lorGL.clearColor(255, 255, 255, 1);
//   }
// }

// let x = 0.01;
// let y = 0;
// let z = 0;
// let a = 10;
// let b = 28;
// let c = 8.0 / 3.0;

// let points = new Array();
// function drawLorenz() {
//     clearLORbg();
//     let dt = 0.01;
//     let dx = (a * (y - x)) * dt;
//     let dy = (x * (b - z) - y) * dt;
//     let dz = (x * y - c * z) * dt;
//     x = x + dx;
//     y = y + dy;
//     z = z + dz;

//     points.push(x);
//     points.push(y);
//     points.push(z);


//      // Create an empty buffer object to store the vertex buffer
//      var vertex_buffer = lorGL.createBuffer();

//      //Bind appropriate array buffer to it
//      lorGL.bindBuffer(lorGL.ARRAY_BUFFER, vertex_buffer);

//      // Pass the vertex data to the buffer
//      lorGL.bufferData(lorGL.ARRAY_BUFFER, new Float32Array(points), lorGL.STATIC_DRAW);

//      // Unbind the buffer
//      lorGL.bindBuffer(lorGL.ARRAY_BUFFER, null);

//      /*=========================Shaders========================*/

//      // vertex shader source code
//      var vertCode =
//         'attribute vec3 coordinates;' +

//         'void main(void) {' +
//            ' lorGL_Position = vec4(coordinates, 1.0);' +
//            'lorGL_PointSize = 10.0;'+
//         '}';

//      // Create a vertex shader object
//      var vertShader = lorGL.createShader(lorGL.VERTEX_SHADER);
     
//      // Attach vertex shader source code
//      lorGL.shaderSource(vertShader, vertCode);

//      // Compile the vertex shader
//      lorGL.compileShader(vertShader);

//      // fragment shader source code
//      var fragCode =
//         'void main(void) {' +
//            ' lorGL_FragColor = vec4(0.0, 0.0, 0.0, 0.1);' +
//         '}';

//      // Create fragment shader object
//      var fragShader = lorGL.createShader(lorGL.FRAGMENT_SHADER);

//      // Attach fragment shader source code
//      lorGL.shaderSource(fragShader, fragCode);

//      // Compile the fragmentt shader
//      lorGL.compileShader(fragShader);
     
//      // Create a shader program object to store
//      // the combined shader program
//      var shaderProgram = lorGL.createProgram();

//      // Attach a vertex shader
//      lorGL.attachShader(shaderProgram, vertShader); 

//      // Attach a fragment shader
//      lorGL.attachShader(shaderProgram, fragShader);

//      // Link both programs
//      lorGL.linkProgram(shaderProgram);

//      // Use the combined shader program object
//      lorGL.useProgram(shaderProgram);

//      /*======== Associating shaders to buffer objects ========*/

//      // Bind vertex buffer object
//      lorGL.bindBuffer(lorGL.ARRAY_BUFFER, vertex_buffer);

//      // Get the attribute location
//      var coord = lorGL.getAttribLocation(shaderProgram, "coordinates");

//      // Point an attribute to the currently bound VBO
//      lorGL.vertexAttribPointer(coord, 3, lorGL.FLOAT, false, 0, 0);

//      // Enable the attribute
//      lorGL.enableVertexAttribArray(coord);

//      /*============= Drawing the primitive ===============*/

//      // Clear the canvas
//      lorGL.clearColor(0.5, 0.5, 0.5, 0.9);

//      // Enable the depth test
//      lorGL.enable(lorGL.DEPTH_TEST);

//      // Clear the color buffer bit
//      lorGL.clear(lorGL.COLOR_BUFFER_BIT);

//      // Set the view port
//      lorGL.viewport(0,0,canvas.width,canvas.height);

//      // Draw the trianlorGLe
//      lorGL.drawArrays(lorGL.POINTS, 0, 3);

// }
// setInterval(drawLorenz, 50);


