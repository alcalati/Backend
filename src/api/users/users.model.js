import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // make sure if the email unique
  },
  password: {
    type: String,
    required: true,
  },
  cash: {
    type: Number,
    required: true,
  },
  deleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const userModel = model('User', userSchema);

export default userModel;
