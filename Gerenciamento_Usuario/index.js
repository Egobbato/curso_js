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

document.querySelectorAll("button").forEach(function () {
  this.addEventListener("click", function () {
    console.log("Cliquei!");
  });
});

document.getElementById("form-user-create").addEventListener("submit", (e) => {
  e.preventDefault();
  campos.forEach(function (campo, index) {
    if (campo.name == "gender") {
      if (campo.checked === true) {
        user[campo.name] = campo.value;
      }
    } else {
      user[campo.name] = campo.value;
    }
  });

  const objectUser = new User(
    user.name,
    user.gender,
    user.birth,
    user.country,
    user.email,
    user.password,
    user.photo,
    user.admin
  );

  addLine(objectUser);
});

function addLine(dataUser) {
  console.log(dataUser);

  document.getElementById("table-users").innerHTML = `
  
  <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
  <td>${dataUser.name}</td>
  <td>${dataUser.email}</td>
  <td>${dataUser.admin}</td>
  <td>${dataUser.birth}</td>
  <td>
    <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
    <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
  </td>
  `;
}
