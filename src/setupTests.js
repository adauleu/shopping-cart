import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { FruitTypes } from "./constants/FruitTypes";

configure({ adapter: new Adapter() });

export function stateFactory(
  bananaQuantity,
  appleQuantity,
  orangeQuantity,
  papayaQuantity
) {
  return {
    cartItems: [
      {
        id: FruitTypes.APPLE,
        name: "Apple",
        price: 0.25,
        quantity: appleQuantity
      },
      {
        id: FruitTypes.ORANGE,
        name: "Orange",
        price: 0.3,
        quantity: orangeQuantity
      },
      {
        id: FruitTypes.BANANA,
        name: "Banana",
        price: 0.15,
        quantity: bananaQuantity
      },
      {
        id: FruitTypes.PAPAYA,
        name: "Papaya",
        price: 0.5,
        quantity: papayaQuantity
      }
    ]
  };
}
