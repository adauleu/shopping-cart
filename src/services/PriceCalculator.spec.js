import { computePrice } from "./PriceCalculator";
import { FruitTypes } from "../constants/FruitTypes";

it("should cost 1.05€ for 2 bananas and 3 oranges", () => {
  //Given
  const cart = {
    [FruitTypes.BANANA]: {
      price: 0.15,
      quantity: 2
    },
    [FruitTypes.ORANGE]: {
      price: 0.3,
      quantity: 3
    }
  };

  //When
  const total = computePrice(cart);

  //Then
  expect(total).toEqual("1.20");
});

it("should cost the price of 2 papayas instead of 3", () => {
  //Given
  const cart = {
    [FruitTypes.PAPAYA]: {
      price: 0.5,
      quantity: 3
    }
  };

  //When
  const total = computePrice(cart);

  //Then
  expect(total).toEqual("1.00");
});

it("should cost 2.30€ for 2 bananas and 5 papayas", () => {
  //Given
  const cart = {
    [FruitTypes.BANANA]: {
      price: 0.15,
      quantity: 2
    },
    [FruitTypes.PAPAYA]: {
      price: 0.5,
      quantity: 5
    }
  };

  //When
  const total = computePrice(cart);

  //Then
  expect(total).toEqual("2.30");
});
