import * as usersService from './users.service.js';

export async function updateProfile(req, res) {
  const updateData = req.body;
  const userId = req.user._id;
  try {
    const updatedUser = await usersService.updateProfile({ userId, updateData, });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found', });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'Error updating profile: '+err.message, });
  }
}

export async function deleteProfile({ req, res, }) {
  const userId = req.user._id;

  try {
    await usersService.deleteProfile(userId);
    res.json({ message: 'Profile deleted successfully', });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting profile: '+err.message, });
  }
}

