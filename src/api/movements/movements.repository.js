import movementsModel from './movements.model.js';

async function addStockMovement({ clothesId, price, quantity, ticketId, }) {
  const addClothes = await movementsModel.create({clothesId, price , quantity , type: 'addStock', ticketId, });
  return addClothes;
}

export {
  addStockMovement
};
