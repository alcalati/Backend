import { Schema, model } from 'mongoose';

const salesSchema = new Schema({
  idClothes: { type: String, required: true, },
  price: { type: Number, required: true, },
  stock: { type: Number, required: true, },
  type: { type: String, required: true, },
});

const clothesModel = model('Sales', salesSchema, 'sales');
export default clothesModel;
