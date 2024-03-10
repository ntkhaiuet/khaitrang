var circle = document.querySelector(".circle");
var spin = document.querySelector(".spin");
var audio = document.querySelector("audio");
var circle = document.querySelector(".circle");

var deg = 0;

circle.onclick = function () {
  circle.style.display = "none";
  audio.play();
  var duration = audio.duration;
  var random = Math.random() * 10 + 15;
  var ramdomDeg = Math.floor(360 * random);
  deg += ramdomDeg;

  spin.style.transform = `rotate(${deg}deg)`;
  spin.style.webkitTransform = `rotate(${deg}deg)`;
  spin.style.mozTransform = `rotate(${deg}deg)`;
  spin.style.oTransform = `rotate(${deg}deg)`;
  spin.style.transitionDuration = duration + "s";
  spin.style.webkitTransitionDuration = duration + "s";
  spin.style.mozTransitionDuration = duration + "s";
  spin.style.oTransition = duration + "s";
};

audio.onended = function () {
  circle.style.display = "block";
  if (audio.src.endsWith("effect.wav")) {
    audio.src = "congrats.mp3";
    audio.play();
    setTimeout(function () {
      audio.src = "effect.wav";
    }, 1000);
  }
};
