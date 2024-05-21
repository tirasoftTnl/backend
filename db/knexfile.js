module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'Work_Test_Database',
      user:     'postgres',
      password: 'herewegoagain123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};