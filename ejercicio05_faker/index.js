const http = require("http");
const { faker } = require("@faker-js/faker");

const server = http.createServer(function (req, res) {
  console.log("Alguien accedió al servidor");
  const username = faker.internet.userName();
  const email = faker.internet.email();
  const birthdate = faker.date.birthdate();

  res.writeHead(200, {
    "content-disposition-Type": "text/plain; charset=utf-8",
  });
  res.end(
    `Mi usuario es ${username}, mi email es ${email} y además, mi birthdate es ${birthdate}`
  );
});

server.listen(8000, () => {
  console.log("Servidor esuchando en http://localhost:8000");
});
