exports.up = function (knex) {
  return knex.schema.createTable("tb_defeito", function (defeito) {
    defeito.integer("id_defeito").primary();
    defeito.string("nome_defeito").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tb_defeito");
};
