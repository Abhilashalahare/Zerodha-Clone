// PositionsModel.js
import mongoose from 'mongoose';
import { PositionsSchema } from '../schemas/PositionsSchema.js';

const PositionsModel = mongoose.model("position", PositionsSchema);

export { PositionsModel };
