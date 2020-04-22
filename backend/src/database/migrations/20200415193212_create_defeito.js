exports.up = function (knex) {
  return knex.schema.createTable("defeito", function (defeito) {
    defeito.increments("id_defeito").primary();
    defeito.string("nome_defeito").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("defeito");
};
