exports.up = function (knex) {
  return knex.schema.createTable("localProblema", function (local) {
    local.increments("id_local").primary();
    local.string("nome_local").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("localProblema");
};
