import clothesModel from './clothes.model.js';

function getByFilter({ query, }) {
  const filteredClothes = clothesModel.find(query).lean();
  return filteredClothes;
}

async function getById({ id, }) {
  const clothesByIndex = await clothesModel.findById(id).lean();
  return clothesByIndex;
}

async function getAll() {
  const allClothes = await clothesModel.find({}).lean();
  return allClothes;
}

function remove({ id, }) {
  const removedClothes = clothesModel.findByIdAndDelete(id);
  return removedClothes;
}

export {
  getAll,
  getByFilter,
  remove,
  getById
};
