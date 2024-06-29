export async function getPrice({ quantity, lastPrice,}) {
  const priceProduct = lastPrice * quantity;
  return priceProduct;
}

export async function obtainBenefit({ quantity, lastPrice,}) {
  const priceProduct = lastPrice * quantity;
  const myBenefit=priceProduct*1.2;
  return myBenefit;
}
