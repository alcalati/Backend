import * as movementsRepository from './movements.repository.js';

export function getById({ id,}) {
  return movementsRepository.getById({ id, });
}


export async function add({ id, productPrice, quantity, }) {
  const newItem = await movementsRepository.addToMovements({clothesId: id, price: productPrice, quantity, });
  return newItem;
}

