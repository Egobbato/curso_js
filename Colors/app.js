const colors = [
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "blue",
  "orange",
  "yellow",
  "rgba(0,128,0)",
  "rgba(34,139,34)",
  "rgba(148,0,211)",
  "rgba(139,0,139)",
  "rgba(175,238,238)",
  "rgba(240,128,128)",
  "#FFFFFF",
  "#FFCCCC",
  "#FFCC99",
  "#FFFFCC",
  "#CCCCCC",
  "#FF6666",
  "#FFCC33",
  "#FFFF99",
  "#C0C0C0",
  "#FF0000",
  "#FF9900",
  "#FFFF00",
  "#999999",
  "#CC0000",
  "#FF6600",
  "#FFCC00",
  "#666666",
  "#990000",
  "#CC6600",
  "#999900",
  "#333333",
  "#660000",
  "#993300",
  "#666600",
  "#000000",
  "#330000",
  "#663300",
  "#333300",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", (e) => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
