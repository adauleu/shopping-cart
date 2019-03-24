import React, { Component } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import CartContainer from "./components/CartContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo" />
        <h1>Here is your cart</h1>
        <CartContainer />
      </div>
    );
  }
}

export default App;
