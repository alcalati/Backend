import * as usersService from './users.service.js';

export async function deleteProfile(req, res) {
  const userId = req.user.id;

  try {
    await usersService.deleteProfile(userId);
    res.json({ message: 'Profile deleted successfully', });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error deleting profile', });
  }
}

export async function updateProfile(req, res) {
  const { email, updateData, } = req.body;

  try {
    console.log(`Updating profile for email: ${email}, with data:`, updateData);
    const updatedUser = await usersService.updateProfileByEmail(email, updateData);
    console.log('Updated user:', updatedUser);
    res.json(updatedUser);
  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).json({ error: 'Error updating profile', });
  }
}
