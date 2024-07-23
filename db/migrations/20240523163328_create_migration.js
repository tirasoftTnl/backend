/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return  knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .then(() => knex.schema

    .createTable('carousel_prod_images', (table)=>{
      table.increments('id');// Primary key + auto increment
      table.string('img_path').notNullable; // not null
    })

    .createTable('products', (table)=>{
      table.increments('id');// Primary key + auto increment
      table.string('title').notNullable; // not null
      table.text('description').notNullable; // not null
      table.string('image_path').notNullable; // not null
    })
    
    .createTable('services', (table)=>{
      table.increments('id');// Primary key + auto increment
      table.string('title').notNullable; // not null
      table.text('description').notNullable; // not null
      table.string('image_path').notNullable; // not null
  
    })

    .createTable('home_images', (table)=>{
      table.increments('id');// Primary key + auto increment
      table.string('img_path').notNullable; // not null
    })
 
    .createTable('entreprise_info', (table)=>{
      table.increments('id');// Primary key + auto increment
      table.string('adress').notNullable; // not null
      table.string('phone').notNullable; // not null
      table.string('location').notNullable; // not null
      table.string('email').notNullable; // not null
      table.string('working_hours').notNullable;
    })

    );
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
};
