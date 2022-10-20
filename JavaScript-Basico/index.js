const saudacao = "Boa noite!";

alert(saudacao);

let a = 10;
const b = 20;
let c = "10";

console.log(a == b || typeof a == "string");
console.log(a === c);

let cor = "amarelo";

if (cor === "verde") {
  console.log("Siga");
} else if (cor === "amarelo") {
  console.log("Atenção!");
} else {
  console.log("Pare!");
}

// Switch case

let semafaro = "vermelho";

switch (semafaro) {
  case "verde":
    console.log("Siga");
    break;

  case "amarelo":
    console.log("Atenção");
    break;
  case "vermelho":
    console.log("Pare");
    break;

  default:
    console.log("Semafaro quebrado");
}

// FOR

let n = 7;

for (let i = 0; i <= 10; i++) {
  console.log(`${i} X ${n} = ${i * n}`);
}
