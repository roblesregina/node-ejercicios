const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));

const validUser = { username: "pepito", password: "1234" };

function checkCredentials(req, res, next) {
  const { usuario, contraseña } = req.body;

  if (usuario === validUser.username && contraseña === validUser.password) {
    req.user = usuario;
    next();
  } else {
    res.send("Credenciales inválidas");
  }
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/login", checkCredentials, (req, res) => {
  res.send(`<h1>Bienvenido/a ${req.user}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
