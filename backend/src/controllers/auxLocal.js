const connection = require("../database/connection");

async function searchLocal(local) {
  const retornoLocal = await connection("tb_local")
    .where("nom_local", local)
    .select("id_local")
    .first();

  return retornoLocal.id_local;
}

async function searchIdMax(id) {
  const retorno = await connection("tb_solucao").max("id_solucao");

  let retId;
  retorno.forEach((ret) => {
    retId = Object.values(ret);
  });

  return retId;
}
async function searchIdDefeitos(defeito) {
  const retornoDefeito = await connection("tb_solucao")
    .where("id_local", defeito)
    .select("id_defeito");

  let defeitos = retornoDefeito.map((ret) => {
    return ret.id_defeito;
  });
  let idDefeitos = defeitos.filter((elem, index, self) => {
    return index === self.indexOf(elem);
  });

  return idDefeitos;
}

//função que uso para retornar os dados dos usuarios
async function getTodos(idDefeitos) {
  idDefeitos = idDefeitos.map(async (ids) => {
    const defeitos = await connection("tb_defeito")
      .where("id_defeito", ids)
      .select("*");

    return defeitos;
  });
  const resultado = await Promise.all(idDefeitos);
  let defeitos = [];
  resultado.forEach((elemento) => {
    elemento.forEach((outroElemento) => {
      defeitos.push(outroElemento);
    });
  });
  return defeitos;
}

module.exports = { searchLocal, searchIdDefeitos, getTodos, searchIdMax };
