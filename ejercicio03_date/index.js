const http = require("http");
const { format } = require("date-fns");
const { enUs, enUS } = require("date-fns/locale");

const server = http.createServer(function (req, res) {
  console.log("Alguien accedió al servidor");

  const today = format(new Date(), "EEEE", { locale: enUS });

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Today is a ${today}`);
});

server.listen(8000);
