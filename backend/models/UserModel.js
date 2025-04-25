import mongoose from 'mongoose';
import UserSchema from '../schemas/UserSchema.js';

const UserModel = mongoose.models.user || mongoose.model('user', UserSchema);

export default UserModel;
