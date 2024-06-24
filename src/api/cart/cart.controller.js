import * as cartService from './cart.service.js';
import * as clothesRepository from '../clothes/clothes.repository.js';

export async function create(req, res) {
  const {id,} = req.params;
  console.log('{ Cart Controller } obteniendo id de producto ');
  const item = await clothesRepository.getById({ id, });
  console.log('{ Cart Controller } se añade el siguiente item ');
  console.log(item);
  const itemPrice = item.price;
  const addItem = await cartService.add({ id, itemPrice, });
  console.log('{ Cart Controller }Se ha añadido el siguiente item ');
  console.log(addItem);
  res.json(addItem);
}