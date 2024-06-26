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

export async function updateById({id, updateData}) {
  try {
    const updatedProduct = await clothesModel.findByIdAndUpdate(id, updateData, { new: true, });
    if (!updatedProduct) {
      throw new Error('Product not found');
    }
    return updatedProduct;
  } catch (error) {
    throw new Error(`Error updating product: ${error.message}`);
  }
}

export {
  getAll,
  getByFilter,
  getByPriceRange,
  remove,
  getById,
  create
};
