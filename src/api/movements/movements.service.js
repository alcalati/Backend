import * as movementsRepository from './movements.repository.js';

export async function getAll() {
  const allMovements = await movementsRepository.getAll();
  return allMovements;
}