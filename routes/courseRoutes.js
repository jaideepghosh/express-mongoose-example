const courseModel = require("../models/course");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
	const courses = await courseModel.find({});

	try {
		res.send(courses);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.post("/", async (req, res) => {
	const course = new courseModel(req.body);
	try {
		await course.save();
		res.send(course);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const course = await courseModel.findByIdAndDelete(req.params.id);

		if (!course) res.status(404).send("No item found");
		res.status(200).send();
	} catch (err) {
		res.status(500).send(err);
	}
});

router.patch("/:id", async (req, res) => {
	try {
		await courseModel.findByIdAndUpdate(req.params.id, req.body);
		await courseModel.save();
		res.send(course);
	} catch (err) {
		res.status(500).send(err);
	}
});

module.exports = router;
