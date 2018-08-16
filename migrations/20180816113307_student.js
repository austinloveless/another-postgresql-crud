exports.up = function(knex, Promise) {
  return knex.schema.createTable("student_names", table => {
    table.increments("id");
    table.text("first_name");
    table.text("last_name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("student_names");
};
