module.exports = (app) => {
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

  app.get("/users/admin", (req, res) => {
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
};
