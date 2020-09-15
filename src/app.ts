import express from "express";
const app = express();
import config from "../config.json";

Object.entries(config).forEach(item => {
	const KEYNAME: string = item[0];
	const VALUE: string | number | null = item[1] ? item[1] : null;
	app.set(KEYNAME, VALUE);
});

export default app;
