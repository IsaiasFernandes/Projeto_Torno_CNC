const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const problema = await connection("problema").select("*");

    return res.json(problema);
  },
};
