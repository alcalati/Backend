import movementsModel from './movements.model.js';

async function getById({ id, }) {
  const movementsByIndex = await movementsModel.findById(id).lean();
  return movementsByIndex;
}

function refund({ id, price, stock, }) {
  const refundClothes = movementsModel.create({idClothes : id, price : price , quantity : stock , type: 'refund', });
  return refundClothes;
}

async function addToMovements({ clothesId, price, quantity, ticketId, }) {
  const addClothes = await movementsModel.create({clothesId, price , quantity , type: 'buy', ticketId, });
  return addClothes;
}

async function update({ id, newItem, }) {
  const query = { _id: id, };
  const options = { new: true, };
  const updatedmovements = await movementsModel.findOneAndUpdate(query,newItem, options);
  return updatedmovements;
}

export {
  getById,
  refund,
  addToMovements,
  update
};
