import clothesModel from './clothes.model.js';

async function getAll() {
  const allClothes = await clothesModel.find({}).lean();
  return allClothes;
}


export {
  getAll
};
