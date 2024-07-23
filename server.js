const express = require("express");
const app = express();
const db = require('./db/db');
const env = require("./db/env");



app.use(express.json());
app.db = db;
module.exports = app;


require("./contributor-1");
app.listen(env.port || 80);
console.log("listening on port " + env.port);
