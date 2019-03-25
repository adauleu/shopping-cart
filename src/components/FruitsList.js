import React from "react";
import FruitItem from "./FruitItem";
import PropTypes from "prop-types";

const FruitsList = ({ cart }) => (
  <div>
    {cart.map(cartItem => (
      <FruitItem
        id={cartItem.id}
        name={cartItem.name}
        price={cartItem.price}
        quantity={cartItem.quantity}
        key={cartItem.id}
      />
    ))}
  </div>
);

FruitsList.propTypes = {
  cart: PropTypes.array.isRequired
};

export default FruitsList;
