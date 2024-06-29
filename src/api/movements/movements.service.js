import * as movementsRepository from './movements.repository.js';

export async function addMovement({ clothesId, productPrice, quantity, }) {
  const newItem = await movementsRepository.addBuyStockMovement({clothesId, productPrice, quantity,});
  return newItem;
}