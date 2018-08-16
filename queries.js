const database = require("./data-connection");

// console.log(knex.select().table(database));

module.exports = {
  list() {
    return database("student_names").select();
  },
  read(id) {
    return database("student_names")
      .select()
      .where("id", id)
      .first();
  },
  create(resolution) {
    return database("student_shit")
      .from("student_names")
      .insert(resolution)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, resolution) {
    return database("student_names")
      .update(resolution)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },
  delete(id) {
    return database("student_names")
      .delete()
      .where("id", id);
  }
};
