import * as movementsService from './movements.service.js';

export async function getAll(req, res) {
  const allMovements = await movementsService.getAll();
  res.json(allMovements);
}