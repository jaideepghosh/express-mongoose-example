const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		lowercase: true
	},
	calories: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) throw new Error("Negative calories aren't real.");
		}
	}
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
