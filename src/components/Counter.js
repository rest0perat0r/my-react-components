import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  increaseCount() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  decreaseCount() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }
  resetCount() {
    this.setState((state) => ({
      count: 0,
    }));
  }
  render() {
    return (
      <div>
        <h1>Count Value: {this.state.count}</h1>
        <button onClick={this.increaseCount}>Increment</button>
        <button onClick={this.decreaseCount}>Decrease</button>
        <button onClick={this.resetCount}>Reset Counter</button>
      </div>
    );
  }
}

export default Counter;
