import * as clothesRepository from './clothes.repository.js';
import * as salesRepository from '../sales/sales.repository.js';

function getByFilter({ query, }) {
  const filteredClothes = clothesRepository.getByFilter({ query, });
  return filteredClothes;
}

async function getAll() {
  const allClothes = await clothesRepository.getAll();
  return allClothes;
}

async function remove({ id, }) {

  const refundedItem = await clothesRepository.getById({id,});
  await salesRepository.refund({ id, price: refundedItem.price, stock: refundedItem.stock, });
  const removedItem = clothesRepository.remove({ id, });
  return removedItem;
}

export {
  getAll,
  getByFilter,
  remove
};
