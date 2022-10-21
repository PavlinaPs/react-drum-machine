import React from "react";
import "../shared.css";
import "./Power.css";

const Power = ({ power, setPower, setDescription, greet }) => {
  const disableButtons = () => {
    setPower(!power);
    if (power === false) {
      setDescription("See You Later");
    }
    if (power === true) {
      setDescription(greet());
    }
  };

  return (
    <button
      className="power-button"
      onClick={disableButtons}
      style={{ backgroundColor: power ? "#d3d3d3" : "#aec774" }}
    >
      {power ? "Off" : "On"}
    </button>
  );
};

export default Power;
