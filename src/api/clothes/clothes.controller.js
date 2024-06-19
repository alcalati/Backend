import * as clothesService from './clothes.service.js';

async function getAll(req, res) {
  const allClothes = await clothesService.getAll();
  res.json(allClothes);
}

async function getByFilter(req, res) {
  const { query, } = req;
  const filteredClothes = await clothesService.getByFilter({query,});
  res.json(filteredClothes);
}

async function remove(req, res) {
  const { id, } = req.params;
  const removedItem = await clothesService.remove({ id, });
  res.json(removedItem);
}

export {
  getAll,
  getByFilter,
  remove
};
