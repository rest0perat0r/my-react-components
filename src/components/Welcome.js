import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, age, children } = this.props;
    return (
      <div>
        <h1>I am {name}</h1>
        <p>My age is: {age}</p>
        <button>Profession: {children}</button>
      </div>
    );
  }
}
export default Welcome;
