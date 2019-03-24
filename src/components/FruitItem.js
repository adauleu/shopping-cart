import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addItem, removeItem } from "../actions/actions";

export const FruitItem = ({ name, price, quantity, addItem, removeItem }) => (
  <div className="fruit-item">
    <div className="fruit-description">
      <img
        src={require("../assets/" + name + ".jpeg")}
        height="30"
        width="30"
        alt=""
      />
      <span>
        {name} - {price}€
      </span>
    </div>
    <div className="fruit-quantity">
      <button onClick={() => addItem(name)}>+</button>
      {quantity}
      <button onClick={() => removeItem(name)} disabled={quantity === 0}>
        -
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItem: fruitName => dispatch(addItem(fruitName)),
  removeItem: fruitName => dispatch(removeItem(fruitName))
});

FruitItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(FruitItem);
