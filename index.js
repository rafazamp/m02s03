const http = require("http");
const fs = require("fs");

function ListarProdutos() {
  try {
    const dados = JSON.parse(fs.readFileSync("dados.json", "utf-8"));
    return JSON.stringify(dados.produtos);
  } catch (erro) {
    return "Erro ao executar";
  }
}

function CriarProduto(novoProduto) {
  try {
    const dados = JSON.parse(fs.readFileSync("dados.json", "utf-8"));
    dados.produtos.push(JSON.parse(novoProduto));
    fs.writeFileSync("dados.json", JSON.stringify(dados));
    return "Produto cadastrado com sucesso!";
  } catch {
    return "Erro ao executar";
  }
}

const server = http.createServer((request, response) => {
  if (request.url == "/produtos") {
    switch (request.method) {
      case "GET":
        response.writeHead(200, {
          "Content-Type": "application/json; charset: utf-8;",
        });
        response.end(ListarProdutos());
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
