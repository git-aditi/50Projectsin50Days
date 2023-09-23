const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
const loadingBar = document.getElementById("loadingBar");
const loadingBarContainer = document.getElementById("loadingBarContainer");

let load = 0;
let width = 0;
let int = setInterval(blurring, 30);
const interval = setInterval(startLoading, 50);
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = scale(load, 1, 100, 1, 0);
  loadingBar.style.opacity = scale(load, 1, 100, 1, 0);
  loadingBarContainer.style.opacity = scale(load, 1, 100, 1, 0);

  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function startLoading() {
  if (width >= 100) {
    clearInterval(interval);
  } else {
    width++;
    loadingBar.style.width = width + "%";
  }
}
