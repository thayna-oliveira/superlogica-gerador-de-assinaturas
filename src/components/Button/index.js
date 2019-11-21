import React from "react";

const Button = props => (
  <button type="button" onClick={props.clickHandler} className={props.style}>
    {props.children}
  </button>
);

export default Button;
