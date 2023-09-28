const labels = document.querySelectorAll(".form-control label");
const label = document.getElementById("label");
const container = document.getElementById(".container");

animate();
container.addEventListener("click", function () {
  word.classList.toggle("slide-down");
});

function animate() {
  labels.forEach((label) => {
    label.innerHTML = label.innerText
      .split("")
      .map(
        (letter, idx) =>
          `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
      )
      .join("");
  });
}
