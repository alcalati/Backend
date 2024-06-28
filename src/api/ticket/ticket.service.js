import * as ticketRepository from './ticket.repository.js';

export async function buyTicket({movementId, userId, }) {
  const time = new Date().toJSON();
  const buyTicket = await ticketRepository.buy({movementId, userId, time, });
  return buyTicket;
}

