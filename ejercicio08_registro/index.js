const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

let usuarios = [];

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get("/registro", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Registro</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body class="container mt-5">
      <h2>Registro de Usuario</h2>
      <form action="/registro" method="POST">
        <div class="mb-3">
          <label class="form-label">Usuario</label>
          <input type="text" name="usuario" class="form-control" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Contraseña</label>
          <input type="password" name="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </body>
    </html>
  `);
});

app.post("/registro", (req, res) => {
  const { usuario, password } = req.body;

  +usuarios.push({ usuario, password });

  res.redirect("/usuarios");
});

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});
