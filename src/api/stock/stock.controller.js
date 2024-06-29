import * as clothesRepository from '../clothes/clothes.repository.js';
import * as clothesService from '../clothes/clothes.service.js';
import * as usersService from '../users/users.service.js';
import * as stockService from './stock.service.js';
import * as movementsService from '../movements/movements.service.js';

export async function addStock(req, res) {
  const { idClothes, quantity, price,} = req.body;
  const user = req.user;
  const userId = user._id;
  const product = await clothesRepository.getById({ id: idClothes });

  if (!product) {
    return res.status(404).json({ message: 'Product not found',});
  }

  if (product.stock > 0) {
    return res.status(400).json({ message: 'You still have stock',});
  }

  let quantityNumber = typeof quantity === 'number' ? quantity : parseInt(quantity);
  let priceNumber = typeof price === 'number' ? price : parseFloat(price);

  if (isNaN(quantityNumber) || isNaN(priceNumber)) {
    return res.status(400).json({ message: 'Invalid quantity or price',});
  }

  // Aqui con la cantidad que hemos puesto y elprecio generado en el pedido
  const productPrice = await stockService.getPrice({ quantity: quantityNumber, lastPrice: priceNumber, });

  // // generamos el movement
  // const addItemToMovements = await movementsService.addMovement({ clothesId: idClothes, productPrice: priceNumber, quantity: quantityNumber,});
  // const movementId = addItemToMovements._id;
  // console.log('***********movementId', movementId);

  const updatedUser = await usersService.subtractCash({ userId, amount: productPrice, });
  if (user.cash < priceNumber) {
    return res.status(400).json({ message: 'Insufficient funds or user not found', });
  }

  const newStock = await clothesService.calculateStock({ id: idClothes, quantity: quantityNumber, });
  const priceWithBenefit = await stockService.obtainBenefit({ quantity: quantityNumber, lastPrice: priceNumber, });
  const updatedStock = await clothesService.updateById({
    id: idClothes,
    updateData: { stock: newStock, price: priceWithBenefit, },
  });

  res.json({ user: updatedUser, product, updatedStock, });
}


// const addItem = await movementsService.add({ id, productPrice, quantity, });
// console.log(addItem);
// const movementId = addItem._id;

// const item = await clothesService.buyItem({ id, quantity, });
// console.log(movementId);
// const ticket = await ticketService.buyTicket({movementId, userId,});

// const updatedUser = await userService.takeMoney({ user, price: productPrice, quantity, });