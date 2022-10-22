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

/* Array */

let carros = ["palio 98 ", "uno", "toro", 10, true, new Date()];

console.log(carros[0]);
console.log(carros.length);

/* Foreach*/

let nomes = ["Eduardo", "Priscila", "Luana", "Isadora"];

nomes.forEach(function (valor, indice) {
  console.log(valor, indice);
});

/* Orientação a objeto  Metodos e Classes */

let celular = function () {
  this.cor = "prata";

  this.ligar = function () {
    return "Faça uma ligação";
  };
};

let novoCelular = new celular();

console.log(novoCelular.ligar());

// Refatorando o codigo acima

class tv {
  constructor() {
    this.cor = "Black piano";
    this.tamanho = 42;
  }

  ligar() {
    return "Ligar TV";
  }
}

let novaTv = new tv();
console.log(novaTv.ligar());
