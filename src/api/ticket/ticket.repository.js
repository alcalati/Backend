import ticketModel from './ticket.model.js';

export async function buy({ userId, time, totalPrice }) {
  const buyTicket = await ticketModel.create({ userId , date : time , totalPrice });
  return buyTicket;
}
