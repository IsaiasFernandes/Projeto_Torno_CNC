const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const local = await connection("local").select("*");

    return res.json(local);
  },
};
