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

async function remove(req, res) {
  const { id, } = req.params;
  const removedItem = await clothesService.remove({ id, });
  res.json(removedItem);
}

async function create(req, res) {
  const clothesItem = req.body;

  if(clothesItem.stock){
    clothesItem.stock=0;
  }

  if (!clothesItem.type || !clothesItem.color || !clothesItem.name || !clothesItem.price) {
    let message = 'The following properties are mandatory: ';
    const emptyProps = [];
    !clothesItem.type && emptyProps.push('Type');
    !clothesItem.color && emptyProps.push('Color');
    !clothesItem.name && emptyProps.push('Name');
    !clothesItem.price && emptyProps.push('Price');
    message += emptyProps.join(', ');


    res.status(400);
    res.json({ error: message, });
    return;
  }
  const lastItem = await clothesService.create({ clothesItem, });
  res.json(lastItem);
}


export {
  getAll,
  getByFilter,
  getByPriceRange,
  remove,
  create
};
