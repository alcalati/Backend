import clothesModel from './clothes.model.js';

function getByFilter({ query, }) {
  const filteredClothes = clothesModel.find(query).lean();
  return filteredClothes;
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

export {
  getAll,
  getByFilter,
  getByPriceRange
};
