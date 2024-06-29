import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  role: {
    type: String,
    required: true,
    enum: ['admin', 'client'], // Definimos los roles permitidos
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

// Método para hashear la contraseña antes de guardarla
userSchema.pre('save', async function(next) {
  try {
    if (this.isModified('password')) {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
});

export default userModel;
