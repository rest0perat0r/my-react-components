import React from "react";

const NonJSXComponent = () => {
  return React.createElement("div", { class: "non-jsx-class" }, [
    React.createElement("h1", null, "Hello from Non JSX World "),
    React.createElement("p", null, "i am a p "),
  ]);
};

export default NonJSXComponent;
