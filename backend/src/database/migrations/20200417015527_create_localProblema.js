exports.up = function (knex) {
  return knex.schema.createTable("tb_local", function (local) {
    local.integer("id_local").primary();
    local.string("nome_local").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tb_local");
};
