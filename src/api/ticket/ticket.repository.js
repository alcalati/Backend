import ticketModel from './ticket.model.js';

export async function buy({ movementId, userId, time, }) {
  const buyTicket = await ticketModel.create({movementId , userId , date : time , });
  return buyTicket;
}
