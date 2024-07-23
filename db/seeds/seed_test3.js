/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('service_carousel_images').del();
  await knex('service_carousel_images').insert([
    { img_path: 'img/img_1.jpg' },
    { img_path: 'img/img_2.jpg' },
    { img_path: 'img/img_3.jpg' }
  ]);
};
