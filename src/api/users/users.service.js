import * as usersRepo from './users.repository.js';

export async function getByEmail({ email, }) {
  return usersRepo.getByEmail({ email, });
}

export async function takeMoney({ user, price, quantity ,}) {
  const totalPrice = price * quantity;
  user.cash = user.cash - totalPrice;
  const updatedUser = await usersRepo.update({id: user._id ,user,});
  return updatedUser;
}