import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addItem, removeItem } from "../actions/actions";

export const FruitItem = ({
  id,
  name,
  price,
  quantity,
  addItem,
  removeItem
}) => (
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
      <button onClick={() => removeItem(id)} disabled={quantity === 0}>
        -
      </button>
      {quantity}
      <button onClick={() => addItem(id)}>+</button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItem: fruitId => dispatch(addItem(fruitId)),
  removeItem: fruitId => dispatch(removeItem(fruitId))
});

FruitItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(FruitItem);
