const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (!box.dataset.color) {
      const randomColor = randomRgbColor();
      box.style.backgroundColor = randomColor;

      const textColor = getContrastColor(randomColor);
      box.dataset.color = textColor;
      box.style.color = textColor;
    } else {
      // If already set, use the existing color from the data attribute
      box.style.color = box.dataset.color;
    }

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

function randomRgbColor() {
  let r = Math.floor(Math.random() * 256); // Random between 0-255
  let g = Math.floor(Math.random() * 256); // Random between 0-255
  let b = Math.floor(Math.random() * 256); // Random between 0-255
  return "rgb(" + r + "," + g + "," + b + ")";
}

function getContrastColor(bgColor) {
  // Check the format of the color (RGB or HEX)
  const matches = bgColor.match(/(\d+),\s*(\d+),\s*(\d+)/);

  const r = parseInt(matches[1]);
  const g = parseInt(matches[2]);
  const b = parseInt(matches[3]);

  // Calculate luminance value
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // If the luminance value is greater than 0.5, the background is
  // considered light, otherwise dark.
  if (luminance > 0.5) {
    return "black"; // Dark text color
  } else {
    return "white"; // Light text color
  }
}
