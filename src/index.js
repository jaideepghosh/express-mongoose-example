const express = require("express");
const routers = require("./routes");
const app = require("./app");
const mongodb = require("./mongodb");
app.use(express.json()); // Make sure it comes back as json

//initialize mongodb.
mongodb(app.get("mongodb"))
	.then(_ => {
		app.use(routers);
	})
	.catch(error => {
		console.error(error);
		process.exit(0);
	});

app.listen(app.get("port"), app.get("host"), () => {
	console.log(
		"Application started on http://%s:%d",
		app.get("host"),
		app.get("port")
	);
});
