import * as clothesRepository from './clothes.repository.js';
import * as movementsRepository from '../movements/movements.repository.js';

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
  await movementsRepository.refund({ id, price: refundedItem.price, stock: refundedItem.stock, });
  const removedItem = clothesRepository.remove({ id, });
  return removedItem;
}

async function buyItem({ id, quantity, }) {
  const buyItem = await clothesRepository.getById({id,});
  const soldItem = await updateStock({buyItem, quantity, });
  const updatedItem = await clothesRepository.update({ id, soldItem, });
  return updatedItem;
}

async function updateStock ({buyItem, quantity, }){
  buyItem.stock = buyItem.stock - quantity;
  return buyItem;
}

export {
  getAll,
  getByFilter,
  removeItem,
  buyItem
};
