import * as clothesRepository from './clothes.repository.js';


async function getAll() {
  const allClothes = await clothesRepository.getAll();
  return allClothes;
}

function getByFilter({ query, }) {
  const filteredClothes = clothesRepository.getByFilter({ query, });
  return filteredClothes;
}

export {
  getAll,
  getByFilter
};
