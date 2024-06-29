import userModel from './users.model.js';

export async function getByEmail({ email, }) {
  const user = await userModel.findOne({ deleted: false, email, }).lean();
  return user;
}

export async function create({ user, }) {
  const newUser = await userModel.create(user);
  return newUser;
}

export async function updateProfile({userId, updateData}) {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(userId, updateData, { new: true });
    if (!updatedUser) {
      throw new Error('User not found');
    }
    return updatedUser;
  } catch (error) {
    throw new Error(`Error updating profile: ${error.message}`);
  }
}

export async function deleteProfile({userId}) {
  try {
    const result = await userModel.findByIdAndUpdate(userId, { deleted: true }, { new: true });
    if (!result) {
      throw new Error('User not found');
    }
  } catch (error) {
    throw new Error(`Error deleting profile: ${error.message}`);
  }
}
