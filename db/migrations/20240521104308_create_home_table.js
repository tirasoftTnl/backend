/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return  knex.schema.createTable('home_images_knex', (table)=>{
      table.increments('id');// Primary key + auto increment
      table.string('img_path').notNullable; // not null
    })
};
  

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('home_images_knex');
};