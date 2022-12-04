const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

consign().include("Routes").include("utils").into(app);

app.listen(4000, () => {
  console.log("Servido Rodando!");
});
