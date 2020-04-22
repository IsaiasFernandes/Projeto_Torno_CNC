const connection = require("../database/connection");
const defeitoController = require("./defeitoController");
const solucaoController = require("./solucaoController");

module.exports = {
  async index(req, res) {
    const local = await connection("tb_local").select("*");

    return res.json(local);
  },
};
