import { ADD_ITEM, REMOVE_ITEM } from "../actions/actions";
import { FruitTypes } from "../constants/FruitTypes";
const initialState = {
  [FruitTypes.BANANA]: {
    price: 0.15,
    quantity: 0
  },
  [FruitTypes.APPLE]: {
    price: 0.25,
    quantity: 0
  },
  [FruitTypes.ORANGE]: {
    price: 0.3,
    quantity: 0
  },
  [FruitTypes.PAPAYA]: {
    price: 0.5,
    quantity: 0
  }
};

function cartApp(state = initialState, action) {
  let cartItem = Object.assign({}, state[action.name]);
  switch (action.type) {
    case ADD_ITEM:
      cartItem.quantity++;
      return {
        ...state,
        [action.name]: cartItem
      };
    case REMOVE_ITEM:
      cartItem.quantity--;
      return {
        ...state,
        [action.name]: cartItem
      };
    default:
      return state;
  }
}

export default cartApp;
