import * as clothesService from './clothes.service.js';
async function getAll(req, res) {
  const allClothes = await clothesService.getAll();
  res.json(allClothes);
}

async function getByFilter(req, res) {
  const { query, } = req;
  const filteredClothes = await clothesService.getByFilter({ query, });
  res.json(filteredClothes);
}

async function getByPriceRange(req, res) {
  const { query, } = req;

  if (!query.min && !query.max) {
    res.status(400);
    res.json({ error: 'The properties of /byPriceRange route query are min or max', });
    return;
  }

  const filteredClothesByPriceRange = await clothesService.getByPriceRange({ query, });
  res.json(filteredClothesByPriceRange);
}

export {
  getAll,
  getByFilter,
  getByPriceRange
};
