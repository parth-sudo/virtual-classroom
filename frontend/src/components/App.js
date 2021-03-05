import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import CustomLayout from "../containers/CustomLayout";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
