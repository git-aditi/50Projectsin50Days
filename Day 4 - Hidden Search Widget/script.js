const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
  document.body.style.backgroundColor = "#000000";
});

btn2.addEventListener("click", () => {
  search.classList.toggle("active");
  document.body.style.backgroundColor = "#7d5fff";
});

// if ((search.addEventListener(onclick), () => {
//   btn.innerHTML =
// }));
