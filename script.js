const X_CLASS = "x";
const CIRCLE_CLASS = "o";
const cellElements = document.querySelectorAll("[data-cell]");
let circleTurn;

cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  console.log("clicked");
}
