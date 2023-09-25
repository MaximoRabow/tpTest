import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: ObjectId,
    name: String,
    email: String,
    password: String,
})

const User = mongoose.model('User', UserSchema);

export default User;

