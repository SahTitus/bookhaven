import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true, validate: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/ },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    image: { type: String },
    tel: { type: String, required: true },
    is: { type: Boolean, required: true, default: false },
    bookmarks: { type: Array, default: [] },
    password: { type: String, },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
});

const User = models.User || model('User', UserSchema);

export default User;