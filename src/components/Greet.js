import React from "react";

const Greet = (props) => {
  /*   return (
    <div>
      <h1>I am {props.name}</h1>
      <p>My age is: {props.age}</p>
    </div>
  ); */
  const { name, age } = props; // using destructure technique
  return (
    <div>
      <h1>I am {name}</h1>
      <p>My age is: {age}</p>
      <button>Profession: {props.children}</button>
    </div>
  );
};

export default Greet;
