const knex = require("knex");
const knexfile = require('./knexfile');

const connection = knex(knexfile.development);

connection.batchUpdate = (table, data) => {
  const { sql, bindings } = connection.insert(data).into(table).toSQL();
  return connection.raw(sql.replace("insert", "replace"), bindings);
};

module.exports = connection;