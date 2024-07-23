/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
    .createTable('carousel_prod_images', (table)=>{
        table.increments('id');// Primary key + auto increment
        table.string('img_path').notNullable; // not null
      })
  };
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('product_carousel');
};
