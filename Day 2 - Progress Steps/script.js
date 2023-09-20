const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
      updateFinishToNext();
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    updateNextToFinish();
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

function updateNextToFinish() {
  next.style.backgroundColor = "#8ae31d";
  next.style.color = "black";
  document.getElementById("next").style.fontWeight = "bold";
  document.getElementById("next").style.letterSpacing = "-0.6px";
  document.getElementById("next").innerHTML = "Finish";
}

function updateFinishToNext() {
  next.style.backgroundColor = "#3498db";
  next.style.color = "White";
  document.getElementById("next").style.fontWeight = "normal";
  document.getElementById("next").style.letterSpacing = "";
  document.getElementById("next").innerHTML = "Next";
}
