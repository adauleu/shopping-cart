import { FruitTypes } from "../constants/FruitTypes";

export function computePrice(cart) {
  return Object.keys(cart)
    .reduce((currentTotal, fruitName) => {
      const cartItem = cart[fruitName];
      const quantity =
        fruitName === FruitTypes.PAPAYA
          ? getQuantityWhen3For2Discount(cartItem.quantity)
          : cartItem.quantity;
      return currentTotal + quantity * cartItem.price;
    }, 0)
    .toFixed(2);
}

function getQuantityWhen3For2Discount(quantity) {
  return quantity - Math.floor(quantity / 3);
}
