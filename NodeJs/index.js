const express = require("express");
const routesIndex = require("./Routes/index.js");
const routesUsers = require("./Routes/users");

const app = express();

app.use(routesIndex);
app.use("/users", routesUsers);

app.listen(4000, () => {
  console.log("Servido Rodando!");
});
