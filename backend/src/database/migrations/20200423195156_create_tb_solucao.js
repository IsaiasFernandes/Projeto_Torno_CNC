exports.up = function (knex) {
  return knex.schema.createTable("tb_solucao", function (solucao) {
    solucao.increments("id_solucao").primary();
    solucao.string("des_problema").notNullable();
    solucao.string("des_solucao").notNullable();

    solucao.integer("id_local").notNullable();
    solucao.integer("id_defeito").notNullable();

    solucao.foreign("id_local").references("id_local").inTable("tb_local");
    solucao
      .foreign("id_defeito")
      .references("id_defeito")
      .inTable("tb_defeito");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tb_solucao");
};
