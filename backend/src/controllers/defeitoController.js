const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const defeito = await connection("tb_defeito").select("*");

    return res.json(defeito);
  },

  async searchDefeito(req) {
    console.log(req);
    const ret = await connection("tb_defeito")
      .where("id_defeito", req)
      .select("*");

    console.log(ret);

    return ret;
  },
};
