import cartModel from './cart.model.js';

async function getById({ id, }) {
  const cartByIndex = await cartModel.findById(id).lean();
  return cartByIndex;
}

function refund({ id, price, stock, }) {
  const refundClothes = cartModel.create({idClothes : id, price : price , stock : stock , type: 'refund', });
  return refundClothes;
}

async function addToCart({ clothesId, price,  }) {
  console.log('{ Cart Repository } se crea el articulo en model');
  const addClothes = await cartModel.create({idClothes : clothesId, price : price , stock : '1' , type: 'sell', });
  console.log(addClothes);
  console.log('{ Cart Repository } se ha añadido al carrito');
  return addClothes;
}

export {
  getById,
  refund,
  addToCart
};
