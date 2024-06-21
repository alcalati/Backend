import salesModel from './sales.model.js';

function refund({ id, price, stock, }) {
  console.log('Sales price: ' + price);
  console.log('Sales stock: ' +stock);
  const refundClothes = salesModel.create({idClothes : id, price : price , stock : stock , type: 'refund', });
  return refundClothes;
}

export {
  refund
};
