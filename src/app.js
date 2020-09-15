const express = require("express");
const app = express();
const config = require("../config.json");
//set config in the app.
for (let key in config) {
	app.set(key, config[key]);
}
module.exports = app;
