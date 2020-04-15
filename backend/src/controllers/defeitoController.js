const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const defeito = await connection("defeito").select("*");

    return res.json(defeito);
  },
};
