const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  if (request.url == "/produtos") {
    switch (request.method) {
      case "GET":
        break;
      case "POST":
        break;
    }
  } else {
    response.writeHead(200, { "Content-Type": "text/plain; charset: utf-8;" });
    response.end("O endpoint padrão é '/produtos'");
  }
});

PORT = 3000;

server.listen(PORT);
console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
