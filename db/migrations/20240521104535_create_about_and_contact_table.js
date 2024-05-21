/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return  knex.schema.createTable('about_and_contact_knex', (table)=>{
      table.increments('id');// Primary key + auto increment
      table.string('adress').notNullable; // not null
      table.string('phone').notNullable; // not null
      table.string('geo_map_place').notNullable; // not null
      table.string('email').notNullable; // not null
  
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('about_and_contact_knex');
};
  