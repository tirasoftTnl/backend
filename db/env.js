const env = {
    key: "MySuP3R_z3kr3t.",
    port: 5000,
  
    databaseConfig: {
      client: "postgresql",
      connection: {
        host: "localhost",
        port: "5432",
        user: "postgres",
        password: "herewegoagain123",
        database: "Work_Test_Database",
      },
      debug: true,
      migrations: {
        directory: "migrations",
      },
      seeds: {
        directory: "migrations/seeds",
      },
    },
    assetServerUrl: "http://localhost",
    assetDirectory: "\\home\\logistic258\\Documents\\logistic",
  };
  
  module.exports = env;
  