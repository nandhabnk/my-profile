import React from "react";
import "./ButtonComponent.scss";

const ButtonComponent = (props) => {
  return (
    <React.Fragment>
      <button
        className="button-style"
        type={props.type ? props.type : ""}
        onClick={props.click ? props.click : ""}
      >
        {props.name}
      </button>
    </React.Fragment>
  );
};

export default ButtonComponent;
