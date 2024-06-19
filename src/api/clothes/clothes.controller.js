import * as clothesService from './clothes.service.js';

async function getAll(req, res) {
  const allClothes = await clothesService.getAll();
  res.json(allClothes);
}

export {
  getAll
};
