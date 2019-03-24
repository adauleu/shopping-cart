import reducer from "./reducers";
import { cartFactory } from "../setupTests";
import { ADD_ITEM, REMOVE_ITEM } from "../actions/actions";
import { FruitTypes } from "../constants/FruitTypes";

describe("cart reducer", () => {
  it("should return the initial state by default", () => {
    //Given
    const state = reducer(undefined, {});

    //Then
    expect(state).toEqual(cartFactory(0, 0, 0, 0));
  });

  it("should handle ADD_ITEM", () => {
    //Given
    const initialState = cartFactory(2, 0, 0, 0);

    //When
    const state = reducer(initialState, {
      type: ADD_ITEM,
      name: FruitTypes.BANANA
    });

    //Then
    expect(state).toEqual(cartFactory(3, 0, 0, 0));
  });

  it("should handle REMOVE_ITEM", () => {
    //Given
    const initialState = cartFactory(2, 0, 0, 0);

    //When
    const state = reducer(initialState, {
      type: REMOVE_ITEM,
      name: FruitTypes.BANANA
    });

    //Then
    expect(state).toEqual(cartFactory(1, 0, 0, 0));
  });
});
