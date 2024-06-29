import * as clothesRepository from '../clothes/clothes.repository.js';
import * as clothesService from '../clothes/clothes.service.js';
import * as usersService from '../users/users.service.js';
import * as stockService from './stock.service.js';

export async function addStock(req, res) {
  const ticketLine = req.body;
  const { idClothes, quantity, price, } = ticketLine;

  const user = req.user;
  const userId = user._id;
  const product = await clothesRepository.getById({ id: ticketLine.idClothes,});

  if (!product) {
    return res.status(404).json({ message: 'Product not found',});
  }

  if (product.stock > 0) {
    return res.status(400).json({ message: 'You still have stock',});
  }

  const quantityNumber = typeof quantity === 'number' ? quantity : parseInt(quantity);
  const priceNumber = typeof price === 'number' ? price : parseFloat(price);

  if (isNaN(quantityNumber) || isNaN(priceNumber)) {
    return res.status(400).json({ message: 'Invalid quantity or price',});
  }

  const addItem = await stockService.addStock({ user,idClothes,quantityNumber,priceNumber,});
  const productPrice = await stockService.getPrice({ quantity: quantityNumber, lastPrice: priceNumber,});
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

  res.json({addItem, updatedUser,updatedStock,});
}
