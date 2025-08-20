const express = require("express");
const app = express();
const port = 3000;

app.use(express.json({}));

app.get("/", (req, res) => {
  res.send("Hola");
});
app.get(
  "/saludar/:nombre",
  (req, res, next) => {
    next();
  },

  (req, res) => {
    console.log(req.params);
    // const nombre = req
    res.send("bye, ${nombre}");
  }
);

app.post("/usuarios", (req, res) => {
  console.log(req.body);
  res.send("Recibido");
});

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}, http://localhost:3000`);
});
