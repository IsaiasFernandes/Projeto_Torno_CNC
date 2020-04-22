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
};
