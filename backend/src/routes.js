const express = require("express");

const defeitoController = require("./controllers/defeitoController");
const localController = require("./controllers/localController");
const solucaoController = require("./controllers/solucaoController");
const criacaoController = require("./controllers/criacaoController");

const routes = express.Router();

routes.get("/locais", localController.index);
routes.post("/locais", localController.create);
routes.get("/defeitos", defeitoController.index);
routes.post("/defeitosId", defeitoController.searchDefeito);
routes.post("/defeitos", defeitoController.create);
routes.get("/solucao", solucaoController.searchSolucao);
routes.post("/criacao", criacaoController.create);

module.exports = routes;
