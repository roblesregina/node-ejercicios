const http = require("http");
const personas = require("./personas");

const server = http.createServer((req, res) => {
  console.log("Alguien accedió al servidor");

  const personasPares = [];
  for (let i = 0; i < personas.length; i++) {
    if (i % 2 === 0) {
      personasPares.push(personas[i]);
    }
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(personasPares));
});

server.listen(8000);
