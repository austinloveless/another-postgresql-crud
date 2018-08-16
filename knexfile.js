module.exports = {
  development: {
    client: "pg",
    connection: "postgres:///student_shit"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
