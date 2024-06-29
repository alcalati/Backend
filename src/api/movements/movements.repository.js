import movementsModel from './movements.model.js';

export async function getAll() {
  const allMovements = await movementsModel.find({}).lean();
  return allMovements;
}