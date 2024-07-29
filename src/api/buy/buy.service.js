import * as ticketRepository from '../ticket/ticket.repository.js';
import * as clothesRepository from '../clothes/clothes.repository.js';
import * as movementsRepository from '../movements/movements.repository.js';
import * as usersRepository from '../users/users.repository.js';

export async function checkMoney({ ticketLines, }) {
  let totalPrice = 0;
  for (let i = 0; i < ticketLines.length; i++) {
    const { id, quantity, } = ticketLines[i];
    const product = await clothesRepository.getById({ id, });
    totalPrice = totalPrice + product.price * quantity;
  }
  return totalPrice;
}

export async function buy({ ticketLines, user, }) {
  const userId = user._id;
  const totalPrice = await checkMoney({ ticketLines, });
  const ticket = await ticketRepository.buy({ userId, time: new Date(), totalPrice });
  const ticketId = ticket._id;
  const movements = [];
  for (let i = 0; i < ticketLines.length; i++) {
    const { id, quantity, } = ticketLines[i];
    const product = await clothesRepository.getById({ id, });
    const productPrice = product.price;
    const movement = await movementsRepository.addToMovements({ clothesId: id, price: productPrice, quantity, ticketId });
    movements.push(movement);
    const buyItem = await clothesRepository.getById({ id, });
    buyItem.stock = buyItem.stock - quantity;
    const updatedclothes = await clothesRepository.update({ id, buyItem, });
  }
  user.cash -= totalPrice;
  const updateduser = await usersRepository.update({ id: user._id, user, });
  ticket.totalPrice = totalPrice;
  return {ticket, movements};
}
