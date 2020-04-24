const connection = require("../database/connection");
const defeitoController = require("./defeitoController");
const solucaoController = require("./solucaoController");

module.exports = {
  async index(req, res) {
    const local = await connection("tb_local").select("*");

    return res.json(local);
  },

  async create(req, res) {
    try {
      const { id_local, nome_local } = req.body;
      await connection("tb_local").insert({ id_local, nome_local });

      return res.status(204).send();
    } catch (err) {
      return res.status(400).send();
    }
  },
};
