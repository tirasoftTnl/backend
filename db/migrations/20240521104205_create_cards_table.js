/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return  knex.schema.createTable('cards_knex', (table)=>{
      table.increments('id');// Primary key + auto increment
      table.string('title').notNullable; // not null
      table.string('description').notNullable; // not null
      table.string('image_path').notNullable; // not null
  
    })
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('cards_knex');
};
