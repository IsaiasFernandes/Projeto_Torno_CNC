const connection = require("../database/connection");
const auxLocal = require("./auxLocal");

module.exports = {
  async index(req, res) {
    const defeito = await connection("tb_defeito").select("*");

    return res.json(defeito);
  },

  async searchDefeito(req, res) {
    let idDefeitos = await auxLocal.searchIdDefeitos(req.query.id);

    const defeitos = await auxLocal.getTodos(idDefeitos);

    return res.json(defeitos);
  },

  async create(req, res) {
    try {
      const { id_defeito, nome_defeito } = req.body;
      await connection("tb_defeito").insert({
        id_defeito,
        nome_defeito,
      });
      return res.status(204).send();
    } catch (err) {
      return res.status(400).send();
    }
  },
};
