import * as movementsService from '../movements/movements.service.js';
import * as clothesRepository from '../clothes/clothes.repository.js';
import * as clothesService from '../clothes/clothes.service.js';
import * as ticketService from '../ticket/ticket.service.js';
import * as userService from '../users/users.service.js';

export async function refund(req, res) {
  const { id, quantity, } = req.body;
  const user = req.user;
  const userId = user._id;

  const product = await clothesRepository.getById({ id, });
  const productPrice = product.price;

  const addItem = await movementsService.add({ id, productPrice, quantity, });
  const movementId = addItem._id;

  const item = await clothesService.buyItem({ id, quantity, });

  const ticket = await ticketService.buyTicket({movementId, userId,});

  const updatedUser = await userService.takeMoney({ user, price: productPrice, quantity, });
  res.json(addItem);
}
