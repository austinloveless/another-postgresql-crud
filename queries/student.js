const database = require("./database-connection");

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
  create(student_name) {
    return database("student_shit")
      .from("student_names")
      .insert(student_names)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, student_names) {
    return database("student_names")
      .update(student_names)
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
