import * as clothesRepository from './clothes.repository.js';

function getByFilter({ query, }) {
  const filteredClothes = clothesRepository.getByFilter({ query, });
  return filteredClothes;
}

async function getAll() {
  const allClothes = await clothesRepository.getAll();
  return allClothes;
}


async function updateById(id, updateData) {
  const updatedProduct = await clothesRepository.updateById(id, updateData);
  return updatedProduct;
}

export {
  updateById,
  getByFilter,
  getAll
};
