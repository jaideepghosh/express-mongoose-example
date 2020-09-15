const express = require("express");
const app = express();

const userRoutes = require("./userRoutes");
const courseRoutes = require("./courseRoutes");

app.use("/users", userRoutes);
app.use("/courses", courseRoutes);

module.exports = app;
