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

async function getLast(req, res) {
  const lastClothes = await clothesService.getLast();
  res.json(lastClothes);
}

async function getCheapest(req, res) {
  const cheapestClothes = await clothesService.getCheapest();
  res.json(cheapestClothes);
}

async function getById(req, res) {
  const { id,} = req.params;
  try {
    const clothesById = await clothesService.getById({ id,});
    if (!clothesById) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(clothesById);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateById(req, res) {
  const { id, } = req.params;
  const updateData = req.body;

  try {
    const updatedProduct = await clothesService.updateById({ id, updateData, });
    res.json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error to update product', });
  }
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

  if(clothesItem.stock){
    clothesItem.stock=0;
  }

  const lastItem = await clothesService.create({ clothesItem, });
  res.json(lastItem);
}


export {
  getAll,
  getById,
  getByFilter,
  getLast,
  getCheapest,
  getByPriceRange,
  remove,
  updateById,
  create
};
