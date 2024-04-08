import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true, validate: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/ },
    name: { type: String, required: true },
    photo: { type: String, },
    isGoogleAuth: { type: Boolean, required: true, default: false },
    isCreator: { type: Boolean, required: true, default: false },
    profile_url: { type: String },
    bookmarks: { type: Array, default: [] },
    password: { type: String, },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
});

const User = models.User || model('User', UserSchema);

export default User;