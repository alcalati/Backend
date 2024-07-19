import ticketModel from './ticket.model.js';

export async function buy({ userId, time, }) {
  const buyTicket = await ticketModel.create({ userId , date : time , });
  return buyTicket;
}
