import * as usersRepo from './users.repository.js';
import userModel from './users.model.js';

export async function updateProfileByEmail(email, updateData) {
  try {
    const updatedUser = await userModel.findOneAndUpdate(
      { email },
      updateData,
      { new: true }
    );

    if (!updatedUser) {
      throw new Error('User not found');
    }

    return updatedUser;
  } catch (error) {
    console.error(`Error updating profile: ${error.message}`);
    throw new Error('Error updating profile');
  }
}

export async function deleteProfile(userId) {
  try {
    const result = await usersRepo.deleteProfile({ userId });

    if (!result) {
      throw new Error('User not found');
    }

    return { message: 'Profile deleted successfully' };
  } catch (error) {
    console.error(`Error deleting profile: ${error.message}`);
    throw new Error('Error deleting profile');
  }
}

export async function getByEmail({ email, }) {
  return usersRepo.getByEmail({ email, });
}
