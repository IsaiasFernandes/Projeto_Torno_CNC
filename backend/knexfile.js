module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "3112",
      database: "Torno_CNC",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
  },
};
