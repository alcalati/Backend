import * as usersRepo from './users.repository.js';

export async function getByEmail({ email, }) {
  return usersRepo.getByEmail({ email, });
}

export async function subtractCash({userId, amount,}) {
  const user = await usersRepo.subtractCash(userId, amount);
  if (!user) {
    throw new Error('User not found or insufficient funds');
  }
  return user;
}