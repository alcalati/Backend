import { Schema, model } from 'mongoose';

const movementsSchema = new Schema({
  idClothes: { type: String, required: true, },
  price: { type: Number, required: true, },
  quantity: { type: Number, required: true, },
  type: { type: String, required: true, },
});

const movementsModel = model('movements', movementsSchema, 'movements');
export default movementsModel;
