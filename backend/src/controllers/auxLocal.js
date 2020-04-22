const connection = require("../database/connection");

async function searchLocal(local) {
  const retornoLocal = await connection("tb_local")
    .where("nom_local", local)
    .select("id_local")
    .first();

  return retornoLocal.id_local;
}

async function searchIdDefeito(defeito) {
  const retornoDefeito = await connection("tb_solucao")
    .where("id_local", defeito)
    .select("id_defeito");

  let defeitos = retornoDefeito.map((ret) => {
    return ret.id_defeito;
  });
  let def = defeitos.filter((elem, index, self) => {
    return index === self.indexOf(elem);
  });

  return def;
}

//função que uso para retornar os dados dos usuarios
async function searchDefeitos(defeito) {
  let resp = await connection("tb_defeito")
    .where("id_defeito", defeito)
    .select("*");

  return resp;
}

module.exports = { searchLocal, searchIdDefeito, searchDefeitos };
