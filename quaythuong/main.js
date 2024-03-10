var cat = document.querySelector(".cat");
var list = document.querySelector(".list");
var audio = document.querySelector("audio");
var closeCat = true;

var spin;

cat.onclick = function () {
  if (closeCat) {
    cat.style.backgroundImage = 'url("img/cat/open.png")';
    closeCat = false;
    audio.play();
    var random = Math.floor(Math.random() * 50) + 1;
    function repeat() {
      removeAndAppend();
      random += 2;
      spin = setTimeout(repeat, random);
    }
    repeat();
  }
};

audio.onended = function () {
  cat.style.backgroundImage = 'url("img/cat/close.png")';
  closeCat = true;
  audio.pause();
  clearTimeout(spin);
};

function removeAndAppend() {
  var item1 = document.querySelector(".item:nth-child(1)");
  item1.remove();
  list.appendChild(item1);
}
