import * as clothesRepository from './clothes.repository.js';

function getByPriceRange({ query, }) {
  const filteredClothesByPriceRange = clothesRepository.getByPriceRange({ query, });
  return filteredClothesByPriceRange;
}

export {
  getByPriceRange
};
