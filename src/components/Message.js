import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      isSubscribed: false,
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: "thanks",
      isSubscribed: !this.state.isSubscribed,
    });
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.isSubscribed
            ? "Thanks for subscription"
            : "Please Subscribe"}
        </h1>
        <button onClick={this.changeMessage}>
          {this.state.isSubscribed ? "Unsubscribe" : "Subscribe"}
        </button>
      </div>
    );
  }
}

export default Message;
