import React from "react";
import { shallow } from "enzyme";
import { FruitItem } from "./FruitItem";
import { FruitTypes } from "../constants/FruitTypes";

describe("Fruit item component", () => {
  it("should display fruit item", () => {
    //Given
    const id = FruitTypes.BANANA;
    const name = "Banana";
    const price = 0.5;
    const quantity = 2;

    //When
    const fruitItemComponent = shallow(
      <FruitItem id={id} name={name} price={price} quantity={quantity} />
    );

    //Then
    expect(fruitItemComponent.text()).toContain(name);
    expect(fruitItemComponent.text()).toContain(price);
    expect(fruitItemComponent.text()).toContain(quantity);
  });

  it("should disable minus button when quantity is 0", () => {
    //Given
    const id = FruitTypes.BANANA;
    const name = "Banana";
    const price = 0.5;
    const quantity = 0;

    //When
    const fruitItemComponent = shallow(
      <FruitItem id={id} name={name} price={price} quantity={quantity} />
    );
    const minusButton = fruitItemComponent.find("button").at(0);

    //Then
    expect(minusButton.prop("disabled")).toEqual(true);
  });

  it("should enable minus button when quantity is not 0", () => {
    //Given
    const id = FruitTypes.BANANA;
    const name = "Banana";
    const price = 0.5;
    const quantity = 2;

    //When
    const fruitItemComponent = shallow(
      <FruitItem id={id} name={name} price={price} quantity={quantity} />
    );
    const minusButton = fruitItemComponent.find("button").at(0);

    //Then
    expect(minusButton.prop("disabled")).toEqual(false);
  });
});
