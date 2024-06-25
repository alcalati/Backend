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
  export async function updateById(id, updateData) {
    try {
      const updatedProduct = await clothesModel.findByIdAndUpdate(id, updateData, { new: true });
      if (!updatedProduct) {
        throw new Error('Product not found');
      }
      return updatedProduct;
    } catch (error) {
      throw new Error(`Error updating product: ${error.message}`);
    }
  }
  