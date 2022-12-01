const http = require("http");

let server = http.createServer((req, res) => {
  console.log("URL:", req.url);
  console.log("METHOD:", res.method);

  res.end("OK");
});

server.listen(4000, "127.0.0.1", () => {
  console.log("Servido Rodando!");
});
