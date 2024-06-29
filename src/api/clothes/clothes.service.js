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

function getByPriceRange({ query, }) {
  const filteredClothesByPriceRange = clothesRepository.getByPriceRange({ query, });
  return filteredClothesByPriceRange;
}

async function remove({ id, }) {
  const refundedItem = await clothesRepository.getById({id,});
  await salesRepository.refund({ id, price: refundedItem.price, stock: refundedItem.stock, });
  const removedItem = clothesRepository.remove({ id, });
  return removedItem;
}

async function updateById({ id, updateData, }) {
  const updatedProduct = await clothesRepository.updateById({ id, updateData, });
  return updatedProduct;
}

async function calculateStock({ id, quantity,}) {
  const stock = await clothesRepository.getStockById({ id,});
  const newStock=stock+quantity;
  return newStock;
}

export {
  getAll,
  getByFilter,
  getByPriceRange,
  remove,
  updateById,
  calculateStock
};
