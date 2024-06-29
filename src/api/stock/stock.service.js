import * as movementsRepository from '../movements/movements.repository.js';
import * as ticketRepository from '../ticket/ticket.repository.js';

export async function getPrice({ quantity, lastPrice, }) {
  const priceProduct = lastPrice * quantity;
  return priceProduct;
}

export async function obtainBenefit({ quantity, lastPrice, }) {
  const priceProduct = lastPrice * quantity;
  const myBenefit = priceProduct * 1.2;
  return myBenefit;
}

export async function addStock({idClothes, user, quantityNumber,priceNumber,}) {
  const userId = user._id;

  const ticket = await ticketRepository.createTicket({ userId, time: new Date(),});
  const ticketId = ticket._id;

  // generamos el movement
  const movement = await movementsRepository.addStockMovement({ clothesId:idClothes, price:priceNumber, quantity: quantityNumber, ticketId,}) ;
  return ticket;
}
