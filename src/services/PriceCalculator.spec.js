import { computePrice } from "./PriceCalculator";
import { FruitTypes } from "../constants/FruitTypes";
import { cartFactory } from "../setupTests";

it("should cost 1.05€ for 2 bananas and 3 oranges", () => {
  //Given
  const cart = cartFactory(2, 0, 3, 0).cartItems;

  //When
  const total = computePrice(cart);

  //Then
  expect(total).toEqual("1.20");
});

it("should cost the price of 2 papayas instead of 3", () => {
  //Given
  const cart = cartFactory(0, 0, 0, 3).cartItems;

  //When
  const total = computePrice(cart);

  //Then
  expect(total).toEqual("1.00");
});

it("should cost 2.30€ for 2 bananas and 5 papayas", () => {
  //Given
  const cart = cartFactory(2, 0, 0, 5).cartItems;

  //When
  const total = computePrice(cart);

  //Then
  expect(total).toEqual("2.30");
});
