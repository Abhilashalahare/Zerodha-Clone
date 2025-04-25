import mongoose from 'mongoose';
import { HoldingsSchema } from '../schemas/HoldingsSchema.js';

const HoldingsModel = mongoose.model("holding", HoldingsSchema);

export { HoldingsModel };
