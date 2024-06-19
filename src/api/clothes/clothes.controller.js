import * as clothesService from './clothes.service.js';

async function getByFilter(req, res) {
  const { query, } = req;
  const filteredClothes = await clothesService.getByFilter({query,});
  res.json(filteredClothes);
}

export {
  getByFilter
};
