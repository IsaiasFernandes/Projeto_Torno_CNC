const connection = require("../database/connection");
const defeitoController = require("./defeitoController");
const localController = require("./localController");

module.exports = {
  async index(req, res) {
    const solucao = await connection("tb_solucao").select("*");

    return res.json(solucao);
  },

  async searchSolucao(req, res) {
    const ret = await connection("tb_solucao")
      .where("id_defeito", req.query.id)
      .where("id_local", req.query.local)
      .select("*");

    return res.json(ret);
  },
};
