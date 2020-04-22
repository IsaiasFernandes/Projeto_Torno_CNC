const connection = require("../database/connection");
const defeitoController = require("./defeitoController");
const localController = require("./localController");

module.exports = {
  async index(req, res) {
    const solucao = await connection("tb_solucao").select("*");

    return res.json(solucao);
  },

  async searchDefeitos(req) {
    const ret = await connection("tb_solucao")
      .where("id_local", req.id_local)
      .select("id_defeito");

    return 0;
  },
};
