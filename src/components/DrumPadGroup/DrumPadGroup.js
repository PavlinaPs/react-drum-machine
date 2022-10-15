import React, { useEffect } from "react";

const DrumPadGroup = (props) => {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      playAudio(e.key.toUpperCase());
      const keyDownItem = props.bank.find(
        (item) => item.key === e.key.toUpperCase()
      );
      props.setDescription(keyDownItem.description.toUpperCase());
    });
  });
  const playAudio = (drumPadId) => {
    const audio = document.getElementById(drumPadId);
    audio.currentTime = 0;
    audio.play();
  };
  return (
    <div className="drum-pad-group">
      {props.bank.map((item) => (
        <button
          key={item.key}
          id={item.id}
          className="drum-pad"
          onClick={() => {
            playAudio(item.key);
            props.setDescription(item.description.toUpperCase());
          }}
        >
          {item.key}
          <audio id={item.key} className="clip" src={item.audio}></audio>
        </button>
      ))}
    </div>
  );
};

export default DrumPadGroup;

// src={require("../../assets/audio/bankOne/mixkit-cowbell-sharp-hit-1743.wav")}
