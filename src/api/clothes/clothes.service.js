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

async function getById({ id,}) {
  const clothesById = await clothesRepository.getById({ id,});
  return clothesById;
}

async function getLast() {
  const lastClothes = await clothesRepository.getLast();
  return lastClothes;
}

async function getCheapest() {
  const cheapestClothes = await clothesRepository.getCheapest();
  return cheapestClothes;
}

async function updateById({ id, updateData, }) {
  const updatedProduct = await clothesRepository.updateById({ id, updateData, });
  return updatedProduct;
}

function getByPriceRange({ query, }) {
  const filteredClothesByPriceRange = clothesRepository.getByPriceRange({ query, });
  return filteredClothesByPriceRange;
}

async function remove({ id, }) {
  const refundedItem = await clothesRepository.getById({id,});
  await movementsRepository.refund({ id, price: refundedItem.price, stock: refundedItem.stock, });
  const removedItem = clothesRepository.remove({ id, });
  return removedItem;
}

async function buyItem({ id, quantity, }) {
  const buyItem = await clothesRepository.getById({id,});
  buyItem.stock = buyItem.stock - quantity;
  const updatedItem = await clothesRepository.update({ id, buyItem, });
  return updatedItem;
}
function create({ clothesItem, }) {
  const newClothesItem = clothesRepository.create({ clothesItem, });
  return newClothesItem;
}

export {
  getAll,
  getById,
  getByFilter,
  getLast,
  getCheapest,
  buyItem,
  getByPriceRange,
  remove,
  updateById,
  create
};
