import mongoose, { Schema, Document } from "mongoose";

export interface CourseInterface extends Document {
	name: string;
}

const CourseSchema: Schema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true
	}
});

const Course = mongoose.model < CourseInterface > ("courses", CourseSchema);
export default Course;
