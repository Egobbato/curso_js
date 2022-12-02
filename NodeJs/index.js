const express = require("express");
const consign = require("consign");

const app = express();

consign().include("Routes").into(app);

app.listen(4000, () => {
  console.log("Servido Rodando!");
});
