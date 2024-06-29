import ticketModel from './ticket.model.js';

export async function createTicket({ userId, time, }) {
  const generatedTicket = await ticketModel.create({ userId , date : time , });
  return generatedTicket;
}
