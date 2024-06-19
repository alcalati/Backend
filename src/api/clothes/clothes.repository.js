import clothesModel from './clothes.model.js';

function getByPriceRange({ query, }) {
  const price = { $gte: 0, };

  query.min && (price.$gte = parseInt(query.min));
  query.max && (price.$lte = parseInt(query.max));

  const filteredByPriceRangeClothes = clothesModel.find({ price, }).lean();
  return filteredByPriceRangeClothes;
}

export {
  getByPriceRange
};