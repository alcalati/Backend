import * as cartRepository from './cart.repository.js';

export async function add({ id, itemPrice, }) {
  console.log('{ Cart Service } Añadiendo producto');
  const newCartItem = await cartRepository.addToCart({clothesId: id, price: itemPrice, });
  console.log(newCartItem);
  console.log('{ Cart Service } El item se ha añadido al carrito ');

  return newCartItem;
}

