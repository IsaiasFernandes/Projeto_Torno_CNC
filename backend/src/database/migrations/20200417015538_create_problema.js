exports.up = function (knex) {
  return knex.schema.createTable("problema", function (prob) {
    prob.integer("id_problema").primary();
    prob.string("desc_problema").notNullable();
    prob.string("desc_solucao").notNullable();
    prob
      .integer("id_prob_defeito")
      .references("id_defeito")
      .inTable("defeito")
      .notNullable()
      .onDelete("cascade");
    prob
      .integer("id_prob_local")
      .references("id_local")
      .inTable("local")
      .notNullable()
      .onDelete("cascade");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("problema");
};
