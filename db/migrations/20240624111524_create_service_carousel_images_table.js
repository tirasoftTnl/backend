/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('service_carousel_images', (table)=>{
        table.increments('id');// Primary key + auto increment
        table.string('img_path').notNullable; // not null
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('service_carousel_images');
  
};
