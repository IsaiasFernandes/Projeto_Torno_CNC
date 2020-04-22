const express = require("express");

const defeitoController = require("./controllers/defeitoController");
const localController = require("./controllers/localController");
const solucaoController = require("./controllers/solucaoController");

const routes = express.Router();

/* routes.get("/defeito", defeitoController.index);
routes.get("/defeito/defeito", defeitoController.searchDefeito); */
routes.get("/local", localController.index);
routes.get("/local/:id", localController.searchLocal);

module.exports = routes;
