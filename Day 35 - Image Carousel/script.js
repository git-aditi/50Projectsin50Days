const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const playPauseBtn = document.getElementById("playpause");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(run, 2000);

let isPlaying = true;

function run() {
  idx++;

  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  if (isPlaying) {
    clearInterval(interval);
    interval = setInterval(run, 2000);
  }
}

function togglePlayPause() {
  isPlaying = !isPlaying; // Toggle the play state first

  if (isPlaying) {
    interval = setInterval(run, 2000);
    playPauseBtn.innerHTML = `&#10073;&#10073;`;
  } else {
    clearInterval(interval);
    playPauseBtn.innerHTML = `&#9658;`;
  }
}

rightBtn.addEventListener("click", () => {
  idx++;

  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;

  changeImage();
  resetInterval();
});

playPauseBtn.addEventListener("click", togglePlayPause);
