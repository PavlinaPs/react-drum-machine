import React from "react";
import "../shared.css";
import "./Volume.css";

const Volume = ({ volume, setVolume, power }) => {
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };
  return (
    <div className="volume-container">
      <label style={{ color: power ? "#d3d3d3" : "#2f3135" }}>Volume</label>
      <input
        type="range"
        name="volume"
        id="volume"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={handleVolumeChange}
        disabled={power}
      />
      <div
        className="volume-percent"
        style={{ color: power ? "#d3d3d3" : "#2f3135" }}
      >
        {volume * 100}%
      </div>
    </div>
  );
};

export default Volume;
