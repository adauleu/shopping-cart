import React from "react";
import { connect } from "react-redux";
import { computePrice } from "../services/PriceCalculator";
import Total from "./Total";
import FruitList from "./FruitsList";

const CartContainer = ({ cart, total }) => (
  <div>
    <FruitList cart={cart} />
    <hr />
    <Total total={total} />
  </div>
);

const mapStateToProps = state => ({
  cart: state,
  total: computePrice(state)
});

export default connect(mapStateToProps)(CartContainer);
