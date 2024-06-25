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
export {
  getAll,
  getByFilter,
  updateById
};