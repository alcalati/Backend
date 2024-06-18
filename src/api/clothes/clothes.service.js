import * as clothesRepository from './clothes.repository.js';


async function getAll() {
  const allClothes = await clothesRepository.getAll();
  return allClothes;
}


export {
  getAll
};
