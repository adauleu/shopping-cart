import reducer, { initialState } from "./reducers";
import { stateFactory } from "../setupTests";
import { ADD_ITEM, REMOVE_ITEM } from "../actions/actions";
import { FruitTypes } from "../constants/FruitTypes";

describe("cart reducer", () => {
  it("should return the initial state by default", () => {
    //Given
    const state = reducer(undefined, {});

    //Then
    expect(state).toEqual(initialState);
  });

  it("should handle ADD_ITEM", () => {
    //Given
    const initialState = stateFactory(2, 0, 0, 0);

    //When
    const state = reducer(initialState, {
      type: ADD_ITEM,
      id: FruitTypes.BANANA
    });

    //Then
    expect(state).toEqual(stateFactory(3, 0, 0, 0));
  });

  it("should handle REMOVE_ITEM", () => {
    //Given
    const initialState = stateFactory(2, 0, 0, 0);

    //When
    const state = reducer(initialState, {
      type: REMOVE_ITEM,
      id: FruitTypes.BANANA
    });

    //Then
    expect(state).toEqual(stateFactory(1, 0, 0, 0));
  });
});
