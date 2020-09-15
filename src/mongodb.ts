import mongoose from "mongoose";
export default async (config: string) => {
	try {
		await mongoose.connect(config, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log("Connected to mongodb.");
	} catch (error) {
		console.error("Mongoose connection error.");
		throw new Error("Unable to connect to mongodb.");
	}
};
