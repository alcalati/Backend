import salesModel from './sales.model.js';

function refund({ id, price, stock, }) {
  const refundClothes = salesModel.create({idClothes : id, price : price , stock : stock , type: 'refund', });
  return refundClothes;
}

async function updateSale({ id, updateData, }) {
  const { stock, price, ...allowedUpdates } = updateData;

  try {
    const updatedSale = await salesModel.findByIdAndUpdate(id, allowedUpdates, { new: true, });

    return updatedSale;
  } catch (error) {
    console.error(`Error updating sale: ${error.message}`);
    throw new Error('Error updating sale');
  }
}


export {
  refund
};
