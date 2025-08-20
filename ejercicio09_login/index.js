const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));

app.post("/login", verificarCredenciales, (req, res) => {
  const { username } = req.body;

  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Bienvenido</title>
    </head>
    <body>
      <h1>Bienvenido/a ${username}</h1>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

const credenciales = {
  username: "pepito",
  password: "1234",
};

function verificarCredenciales(req, res, next) {
  const { username, password } = req.body;

  if (
    username === credenciales.username &&
    password === credenciales.password
  ) {
    next();
  } else {
    res.send("Credenciales inválidas");
  }
}
