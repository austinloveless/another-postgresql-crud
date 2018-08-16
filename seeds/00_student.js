exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("student_names")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("student_names").insert([
        { id: 1, first_name: "brice", last_name: "Go skiing" },
        { id: 2, first_name: "austin", last_name: "Do stand-up" },
        { id: 3, first_name: "james", last_name: "Start knitting" }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE student_names_id_seq RESTART WITH 4;");
    });
};
