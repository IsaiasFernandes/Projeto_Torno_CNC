const connection = require("../database/connection");
const aux = require("./auxLocal");

module.exports = {
  async create(req, res) {
    try {
      const { des_problema, des_solucao, id_defeito, id_local } = req.body;

      await connection("tb_solucao").insert({
        des_problema,
        des_solucao,
        id_defeito,
        id_local,
      });

      return res.status(204).send();
    } catch (err) {
      return res.status(400).send();
    }
  },
};
