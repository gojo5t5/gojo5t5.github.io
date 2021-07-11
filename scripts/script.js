// flying text animation
var flyingTexts = document.querySelectorAll(".fly-text");
for (var i = 0; i < flyingTexts.length; i++) {
  var text = flyingTexts[i];
  letTextFly(text);
}
function letTextFly(text) {
  text.keyframes = [
    { opacity: 0.5 },
    { opacity: 1 },
    { opacity: 0.75 },
    { transform: "translateX(-100%)" },
  ];
  text.animProps = {
    duration: 5000 + Math.random() * 10000,
    iterations: Infinity,
  };
  text.animate(text.keyframes, text.animProps);
  // text.addEventListener("mouseover", function (e) {
  //   e.target.animProps.duration += 4000;
  // });
}
