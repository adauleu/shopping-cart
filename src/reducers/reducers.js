import { ADD_ITEM, REMOVE_ITEM } from "../actions/actions";
import { FruitTypes } from "../constants/FruitTypes";
import { createReducer } from "redux-starter-kit";

export const initialState = {
  cartItems: [
    {
      id: FruitTypes.APPLE,
      name: "Apple",
      price: 0.25,
      quantity: 0
    },
    {
      id: FruitTypes.ORANGE,
      name: "Orange",
      price: 0.3,
      quantity: 0
    },
    {
      id: FruitTypes.BANANA,
      name: "Banana",
      price: 0.15,
      quantity: 0
    },
    {
      id: FruitTypes.PAPAYA,
      name: "Papaya",
      price: 0.55,
      quantity: 0
    }
  ]
};

const cartApp = createReducer(initialState, {
  [ADD_ITEM]: (state, action) => {
    const cartItemIndex = state.cartItems.findIndex(
      cartItem => action.id === cartItem.id
    );
    state.cartItems[cartItemIndex].quantity++;
  },
  [REMOVE_ITEM]: (state, action) => {
    const cartItemIndex = state.cartItems.findIndex(
      cartItem => action.id === cartItem.id
    );
    state.cartItems[cartItemIndex].quantity--;
  }
});

export default cartApp;
