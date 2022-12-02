let express = require("express");
let routes = express.Router();

routes.get("/", (req, res) => {
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

routes.get("/admin", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json({
    users: [
      {
        administrador: "Eduardo",
        email: "egobbato@teste.com",
        id: 1,
      },
    ],
  });
});

module.exports = routes;
