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

async function updateById(req, res) {
  const { id } = req.params; 
  const updateData = req.body; 

  try {
    const updatedProduct = await clothesService.updateById(id, updateData);
    res.json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar o produto' });
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

export {
  getAll,
  getByFilter,
  getByPriceRange,
  remove,
  updateById
};
