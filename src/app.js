const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Go to /graphql"));

app.use(express.static(path.join(__dirname, "../uploads")));

module.exports = app;
