import React from "react";
import "./ButtonComponent.scss";

const ButtonComponent = (props) => {
  return (
    <React.Fragment>
      <button className="button-style">{props.name}</button>
    </React.Fragment>
  );
};

export default ButtonComponent;
