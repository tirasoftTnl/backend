const express = require("express");
const app = express();
const { Pool } = require('pg');
const cors = require("cors");

app.use(cors());
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

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// ------------------------------------ APIS --------------------------------------------------
app.get("/api/get_cards", async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM cards');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get("/api/get_images", async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM home_images');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get("/api/about_and_contact", async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM about_and_contact');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get("/api/testimonials", async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM testimonials');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
// ------------------------------------ APIS --------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
app.listen(5000, () => {
  console.log('Server started on port 5000');
});