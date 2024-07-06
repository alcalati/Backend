import userModel from './users.model.js';

export async function getByEmail({ email, }) {
  const user = await userModel.findOne({ deleted: false, email, }).lean();
  return user;
}

export async function create({ user, }) {
  const newUser = await userModel.create(user);
  return newUser;
}

export async function addCash({ userId, amount, }) {
  const options = { new: true,};
  const updatedUser = await userModel.findByIdAndUpdate(
    userId,
    { $set: { cash: amount, },},
    options
  );
  return updatedUser;
}

export async function updateById({ id, updateData }) {
  try {
    const { stock, price, ...allowedUpdates } = updateData; 
    const updatedProduct = await clothesModel.findByIdAndUpdate(id, allowedUpdates, { new: true });
    if (!updatedProduct) {
      throw new Error('Product not found');
    }
    return updatedProduct;
  } catch (error) {
    console.error(`Error updating product: ${error.message}`);
    throw new Error('Error updating product');
  }
}

