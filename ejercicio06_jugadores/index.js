const http = require("http");
const jugadores = require("./jugadores");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  res.end(JSON.stringify(jugadores));
});

server.listen(8000, () => {
  console.log("Servidor escuchando en http://localhost:8000");
});
