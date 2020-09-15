import express from "express";
import routers from "./routes";
import app from "./app";
import mongodb from "./mongodb";

app.use(express.json()); // Make sure it comes back as json

// initialize mongodb.
mongodb(app.get("mongodb"))
	.then((_: any) => {
		app.use(routers);
	})
	.catch((error: any) => {
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
