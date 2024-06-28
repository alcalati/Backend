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

async function update({ id, soldItem, }) {
  const query = { _id: id, };
  const options = { new: true, };
  const updatedClothes = await clothesModel.findOneAndUpdate(query, soldItem, options);
  return updatedClothes;
}

export {
  getAll,
  getByFilter,
  remove,
  getById,
  update
};
