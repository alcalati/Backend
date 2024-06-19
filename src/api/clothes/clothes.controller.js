import * as clothesService from './clothes.service.js';

async function getByPriceRange(req, res) {
  const { query, } = req;
  console.log('query', query);
  if (!query.min || !query.max || !query) {
    res.status(400);
    res.json({ error: 'The properties of /byPriceRange route query are min or max', });
    return;
  }

  const filteredClothesByPriceRange = await clothesService.getByPriceRange({ query, });
  res.json(filteredClothesByPriceRange);
}


export {
  getByPriceRange
};
