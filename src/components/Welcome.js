import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
      </div>
    );
  }
}

export default Welcome;
