const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
});

PORT = 3000;

server.listen(PORT);
console.log(`Servidor rodando no endereço http://localhost:${PORT}`);