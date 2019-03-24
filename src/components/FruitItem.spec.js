import React from "react";
import { shallow } from "enzyme";
import { FruitItem } from "./FruitItem";
import { FruitTypes } from "../constants/FruitTypes";

describe("Fruit item component", () => {
  it("should display fruit item", () => {
    //Given
    const name = FruitTypes.BANANA;
    const price = 0.5;
    const quantity = 2;
    //When
    const fruitItemComponent = shallow(
      <FruitItem name={name} price={price} quantity={quantity} />
    );

    //Then
    expect(fruitItemComponent.text()).toContain(name);
    expect(fruitItemComponent.text()).toContain(price);
    expect(fruitItemComponent.text()).toContain(quantity);
  });
});
