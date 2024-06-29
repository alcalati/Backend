import { Schema, model } from 'mongoose';
const { ObjectId, } = Schema.Types;

const movementsSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['buy', 'addStock', 'refundStock',],
  },
  ticketId: {
    type: ObjectId,
    ref: 'Ticket',
    required: true,
  },
  clothesId: {
    type: ObjectId,
    ref: 'Clothes',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  price: {
    type: Number,
    required: true,
  },
});

const movementModel = model('Movement', movementsSchema);
export default movementModel;
