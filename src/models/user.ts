import mongoose, { Schema, Document } from "mongoose";

export interface UserInterface extends Document {
	name: string;
}

const UserSchema: Schema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		lowercase: true
	}
});

const User = mongoose.model < UserInterface > ("users", UserSchema);
export default User;
