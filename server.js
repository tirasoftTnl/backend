const express = require("express");
const app = express();
const knex = require('./db/db');

app.use(express.json());

/*
const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Work_Test_Database',
  password: 'herewegoagain123',
  port: 5432,
  connect_timeout: 10,
  sslmode: 'prefer'
});

pool.connect()
.then(() => {
  console.log('Connection pool established successfully');
}).catch((err) => {
  console.error('Error establishing connection pool:', err);
});
*/

// ------------------------------------ APIS --------------------------------------------------
app.get("/api/get_cards", async (req, res) => {
      knex.select().from('cards_knex').then((cards_knex)=>{
      res.send(cards_knex);
    })
});

app.get("/api/get_images", async (req, res) => {
    knex.select().from('home_images_knex').then((home_images_knex)=>{
    res.send(home_images_knex);
  })
});

app.get("/api/about_and_contact", async (req, res) => {
    knex.select().from('about_and_contact_knex').then((about_and_contact)=>{
      res.send(about_and_contact);
    })
});

app.get("/api/testimonials", async (req, res) => {
    knex.select().from('testimonials_knex').then((testimonials)=>{
      res.send(testimonials);
    })
});
// ------------------------------------ APIS --------------------------------------------------

app.listen(5000, () => {
  console.log('Server started on port 5000');
});