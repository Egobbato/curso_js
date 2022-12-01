const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.end("<h1>Olá Mundo</h1>");
});

app.get("/users", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json({
    users: [
      {
        name: "Gobbato",
        email: "egobbato@teste.com",
        id: 1,
      },
    ],
  });
});

app.listen(4000, () => {
  console.log("Servido Rodando!");
});
