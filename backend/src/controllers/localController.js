const connection = require("../database/connection");
const defeitoController = require("./defeitoController");
const solucaoController = require("./solucaoController");
const auxLocal = require("./auxLocal");
module.exports = {
  async index(req, res) {
    const local = await connection("tb_local").select("*");

    return res.json(local);
  },

  async searchLocal(req, res) {
    const retornoLocal = await auxLocal.searchLocal(req.query.id);

    const retornoIdDefeito = await auxLocal.searchIdDefeito(retornoLocal);

    //let defeitos é a variavel que quero usar para armazenar
    // retornoIdDefeito é o array com os ids
    let defeitos = retornoIdDefeito.forEach(async function (element) {
      retorno = await auxLocal.searchDefeitos(element);

      console.log(retorno);

      return retorno;
    });

    console.log(defeitos);

    return res.json({ ok: true });
  },
};
