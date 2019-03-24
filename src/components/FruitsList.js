import React from "react";
import FruitItem from "./FruitItem";
import PropTypes from "prop-types";

const FruitsList = ({ cart }) => (
  <div>
    {Object.keys(cart).map((fruitName, index) => (
      <FruitItem
        name={fruitName}
        price={cart[fruitName].price}
        quantity={cart[fruitName].quantity}
        key={index}
      />
    ))}
  </div>
);

FruitsList.propTypes = {
  cart: PropTypes.object.isRequired
};

export default FruitsList;
