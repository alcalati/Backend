import { Schema, model } from 'mongoose';

const cartSchema = new Schema({
  idClothes: { type: String, required: true, },
  price: { type: Number, required: true, },
  stock: { type: Number, required: true, },
  type: { type: String, required: true, },
});

const cartModel = model('cart', cartSchema, 'cart');
export default cartModel;
