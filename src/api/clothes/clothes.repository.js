import clothesModel from './clothes.model.js';

function getByFilter({ query, }) {
  const filteredClothes = clothesModel.find(query).lean();
  return filteredClothes;
}

async function getAll() {
  const allClothes = await clothesModel.find({}).lean();
  return allClothes;
}

export {
  getAll,
  getByFilter
};
