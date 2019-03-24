import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { FruitTypes } from "./constants/FruitTypes";

configure({ adapter: new Adapter() });

export function cartFactory(
  bananaQuantity,
  appleQuantity,
  orangeQuantity,
  papayaQuantity
) {
  return {
    [FruitTypes.BANANA]: {
      price: 0.15,
      quantity: bananaQuantity
    },
    [FruitTypes.APPLE]: {
      price: 0.25,
      quantity: appleQuantity
    },
    [FruitTypes.ORANGE]: {
      price: 0.3,
      quantity: orangeQuantity
    },
    [FruitTypes.PAPAYA]: {
      price: 0.5,
      quantity: papayaQuantity
    }
  };
}
