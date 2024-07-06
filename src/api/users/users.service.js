import * as usersRepo from './users.repository.js';
import bcrypt from 'bcrypt';

export async function updateProfile({ userId, updateData, }) {
  const existingUser = await usersRepo.getById(userId);

  if (!existingUser) {
    throw new Error('User not found');
  }

  if ((existingUser.role === 'client' || existingUser.role === 'provedor') &&
      (updateData.role || updateData.cash !== undefined)) {
    throw new Error('Unauthorized to change role or cash'); // Impide que 'client' o 'provedor' cambien 'role' o 'cash'
  }

  if (updateData.password) {
    const hashedPassword = await bcrypt.hash(updateData.password, 10); // Hashea la nueva contraseña
    updateData.password = hashedPassword;
  }

  const updatedUser = await usersRepo.updateProfile({ userId, updateData });

  return updatedUser;
}

export async function deleteProfile(userId) {
  const existingUser = await usersRepo.getById(userId);

  if (!existingUser) {
    throw new Error('User not found');
  }

  if (existingUser.role !== 'admin') {
    throw new Error('Unauthorized to delete profile');
  }

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

export async function getByEmail({ email }) {
  return usersRepo.getByEmail({ email });
}