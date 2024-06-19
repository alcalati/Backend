import clothesModel from './clothes.model.js';

function getByFilter({ query, }) {
  const filteredClothes = clothesModel.find(query).lean();
  return filteredClothes;
}

async function getAll() {
  const allClothes = await clothesModel.find({}).lean();
  return allClothes;
}

function remove({ id, }) {
  const replacedClothes = clothesModel.findByIdAndDelete(id);
  return replacedClothes;
}

export {
  getAll,
  getByFilter,
  remove
};
