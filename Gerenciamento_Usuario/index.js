const nome = document.querySelector("#exampleInputName");
const genero = document.querySelectorAll(
  "#form-user-create [name = gender]:checked"
);
const nascimento = document.querySelector("#exampleInputBirth");
const pais = document.querySelector("#exampleInputCountry");
const eMail = document.querySelector("#exampleInputEmail");
const senha = document.querySelector("#exampleInputPassword");
const foto = document.querySelector("#exampleInputFile");
const admin = document.querySelector("#exampleInputAdmin");

const campos = document.querySelectorAll("#form-user-create [name]");

const user = {};

campos.forEach(function (campo, index) {
  if (campo.name == "gender") {
    if (campo.checked === true) {
      user[campo.name] = campo.value;
    }
  } else {
    user[campo.name] = campo.value;
  }
});

console.log(user);
