const express = require("express");

const defeitoController = require("./controllers/defeitoController");
const localController = require("./controllers/localController");
const solucaoController = require("./controllers/solucaoController");

const routes = express.Router();

routes.get("/");
routes.get("/locais", localController.index);
routes.get("/defeitos/", defeitoController.searchDefeito);
routes.get("/solucao/", solucaoController.searchSolucao);
routes.post("/criacao/");

module.exports = routes;
