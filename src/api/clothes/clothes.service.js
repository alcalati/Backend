import * as clothesRepository from './clothes.repository.js';
import * as cartRepository from '../cart/cart.repository.js';

function getByFilter({ query, }) {
  const filteredClothes = clothesRepository.getByFilter({ query, });
  return filteredClothes;
}

async function getAll() {
  const allClothes = await clothesRepository.getAll();
  return allClothes;
}

async function removeItem({ id, }) {

  const refundedItem = await clothesRepository.getById({id,});
  await cartRepository.refund({ id, price: refundedItem.price, stock: refundedItem.stock, });
  const removedItem = clothesRepository.remove({ id, });
  return removedItem;
}

async function sellItem({ id, }) {
  console.log('{ Clothes Service } Cogiendo item para vender');
  const sellItem = await clothesRepository.getById({id,});
  console.log('se procede a quitar de inventario '+ sellItem);
  await cartRepository.sell({ id, price: sellItem.price, stock: sellItem.stock, });
  const soldItem = clothesRepository.update({ id, sellItem,});
  console.log('Se ha quitado el stock ' + soldItem);
  return soldItem;
}

export {
  getAll,
  getByFilter,
  removeItem,
  sellItem
};
