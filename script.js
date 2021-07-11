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

  var animationPlayer = text.animate(text.keyframes, text.animProps);
}
