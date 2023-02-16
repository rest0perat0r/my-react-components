import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
    this.tick = this.tick.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.startClock = this.startClock.bind(this);
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }
  stopTimer() {
    clearInterval(this.timer);
  }
  startClock() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div>
        <h1>Now it is: {this.state.time}</h1>
        <button onClick={this.startClock}>Start Clock</button>
        <button onClick={this.stopTimer}>Stop the clock</button>
      </div>
    );
  }
}

export default Clock;
