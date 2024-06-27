import * as usersRepo from './users.repository.js';

export async function getByEmail({ email, }) {
  return usersRepo.getByEmail({ email, });
}

export async function addCash({ user, amount, }) {
  user.cash += amount;

  const updatedUser = await usersRepo.addCash({ userId: user._id, amount: user.cash,});
  return updatedUser;
}