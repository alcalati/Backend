import { Schema, model } from 'mongoose';

const clothesSchema = new Schema({
  type: { type: String, required: true, },
  color: { type: String, required: true, },
  name: { type: String, required: true, },
  price: { type: Number, required: true, },
  stock: { type: Number, required: true, },
  description: { type: String, required: false, },
});

const clothesModel = model('Clothes', clothesSchema, 'clothes');
export default clothesModel;