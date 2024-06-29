import movementsModel from './movements.model.js';

async function addBuyStockMovement({clothesId, productPrice, quantity,}) {
  const addClothes = await movementsModel.create({clothesId, productPrice, quantity, type: 'addStock', });
  return addClothes;
}

export {
  addBuyStockMovement
};
