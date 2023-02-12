import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1>Hi, {props.name}</h1>
      <p>Age: {props.age}</p>
      {props.children}
    </div>
  );
};

export default Greet;
