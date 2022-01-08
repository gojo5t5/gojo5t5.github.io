const RAINCANVAS = document.getElementById("rainfall");
RAINCANVAS.height = HEIGHT;
RAINCANVAS.width = WIDTH;

var rainctx = RAINCANVAS.getContext("2d");
var rainimage = document.getElementById('rainimage');
drawImageScaled(rainimage, rainctx)
// v.addEventListener('play',function() {i=window.setInterval(function() {rainctx.drawImage(v,0,0,260,125)},20);},false);
// v.addEventListener('pause',function() {window.clearInterval(i);},false);
// v.addEventListener('ended',function() {clearInterval(i);},false);