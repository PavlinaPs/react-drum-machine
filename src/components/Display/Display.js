import React from "react";
import "../shared.css";
import "./Display.css";

const Display = (props) => {
  return (
    <div id="display" className="display">
      <div>{props.description}</div>
    </div>
  );
};

export default Display;
