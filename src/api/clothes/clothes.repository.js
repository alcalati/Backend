import clothesModel from './clothes.model.js';

async function getAll() {
  const allClothes = await clothesModel.find({}).lean();
  return allClothes;
}

function getByFilter({ query, }) {
  const filteredClothes = clothesModel.find(query).lean();
  return filteredClothes;
}



export {
  getAll ,
  getByFilter
};
