import * as clothesRepository from './clothes.repository.js';

function getByFilter({ query, }) {
  const filteredClothes = clothesRepository.getByFilter({ query, });
  return filteredClothes;
}

async function getAll() {
  const allClothes = await clothesRepository.getAll();
  return allClothes;
}

function remove({ id, }) {
  const removedItem = clothesRepository.remove({ id, });
  return removedItem;
}

export {
  getAll,
  getByFilter,
  remove
};
