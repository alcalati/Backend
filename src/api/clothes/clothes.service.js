import * as clothesRepository from './clothes.repository.js';

function getByFilter({ query, }) {
  const filteredClothes = clothesRepository.getByFilter({ query, });
  return filteredClothes;
}

export {
  getByFilter
};
