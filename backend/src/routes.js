const express = require("express");

const routes = express.Router();
const defeitoController = require("./controllers/defeitoController");
const localController = require("./controllers/localController");
const problemaController = require("./controllers/problemaController");

routes.get("/defeito", defeitoController.index);
routes.get("/local", localController.index);
routes.get("/problema", problemaController.index);
