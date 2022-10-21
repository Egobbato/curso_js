function calc(x1, operator, x2) {
  return eval(`${x1} ${operator} ${x2}`);
}

console.log(calc(2, "+", 8));

/* função anonima */

(function (x1, operador, x2) {
  return console.log(eval(`${x1},${operador}${x2}`));
})(2, "+", 2);

/* arrow functio */

calcula = (x1, operator, x2) => {
  return eval(`${x1} ${operator} ${x2}`);
};
console.log(calcula(2, "*", 6));

/* Aprendendo do DOM e eventos */

window.addEventListener("focus", (e) => {
  console.log("focus");
});

document.addEventListener("click", (e) => {
  console.log("click");
});

/* Aprendendo Data */

const agora = new Date();

console.log(agora.toLocaleDateString("pt-br"));
