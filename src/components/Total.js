import React from "react";
import { PropTypes } from "prop-types";

const Total = ({ total }) => <span>TOTAL: {total} €</span>;

Total.propTypes = {
  total: PropTypes.string.isRequired
};
export default Total;
