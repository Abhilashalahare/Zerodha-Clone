import mongoose from 'mongoose';
import { OrdersSchema } from '../schemas/OrdersSchema.js';

const OrdersModel = mongoose.model("order", OrdersSchema);

export { OrdersModel };
