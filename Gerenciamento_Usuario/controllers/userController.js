class UserController {
  constructor(formId, tableId) {
    this.formEl = document.getElementById(formId);
    this.tabelEl = document.getElementById(tableId);

    this.onSubmit();
  }

  onSubmit() {
    this.formEl.addEventListener("submit", (event) => {
      event.preventDefault();

      let values = this.getValues();

      this.getPhoto().then(
        (content) => {
          values.photo = content;

          this.addLine(values);
        },
        (e) => {
          console.error(e);
        }
      );
    });
  }

  getPhoto() {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();

      let elements = [...this.formEl.elements].filter((item) => {
        if (item.name === "photo") {
          return item;
        }
      });

      let file = elements[0].files[0];

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (e) => {
        reject(e);
      };

      if (file) {
        fileReader.readAsDataURL(file);
      } else {
        resolve("../dist/img/boxed-bg.jpg");
      }
    });
  }

  getValues() {
    let user = {};

    [...this.formEl.elements].forEach((campo, index) => {
      if (campo.name == "gender") {
        if (campo.checked) {
          user[campo.name] = campo.value;
        } else if (campo.name == "admin") {
          user[campo.name] = campo.checked;
        }
      } else {
        user[campo.name] = campo.value;
      }
      console.log(this.formEl);
    });

    return new User(
      user.name,
      user.gender,
      user.birth,
      user.country,
      user.email,
      user.password,
      user.photo,
      user.admin
    );
  }

  addLine(dataUser) {
    const tr = document.createElement("tr");

    tr.innerHTML = `
    
    <td><img src="${
      dataUser.photo
    }" alt="User Image" class="img-circle img-sm"></td>
    <td>${dataUser.name}</td>
    <td>${dataUser.email}</td>
    <td>${dataUser.admin ? "Sim" : "Não"}</td>
    <td>${dataUser.birth}</td>
    <td>
      <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
      <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
    </td>
    `;

    this.tabelEl.appendChild(tr);
  }
}
