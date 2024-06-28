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

function getByPriceRange({ query, }) {
  const price = { $gte: 0, };

  query.min && (price.$gte = parseFloat(query.min));
  query.max && (price.$lte = parseFloat(query.max));

  const filteredByPriceRangeClothes = clothesModel.find({ price, }).lean();
  return filteredByPriceRangeClothes;
}

function remove({ id, }) {
  const removedClothes = clothesModel.findByIdAndDelete(id);
  return removedClothes;
}

function create({ clothesItem, }) {
  const createdClothes = clothesModel.create(clothesItem);
  return createdClothes;
}

export {
  getAll,
  getByFilter,
  getByPriceRange,
  remove,
  getById,
  create
};
