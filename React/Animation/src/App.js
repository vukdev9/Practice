import React, { Component } from "react";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";

class App extends Component {
  state = {
    showComponent: false,
  };

  toggleComponent = () => {
    this.setState({ showComponent: !this.state.showComponent });
  };

  render() {
    return (
      <div className="App">
        <Component1 />
        <Component2 toggleComponent={this.toggleComponent} />
        {this.state.showComponent ? <Component3 /> : null}
      </div>
    );
  }
}

export default App;
