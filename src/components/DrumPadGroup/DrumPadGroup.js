import React, { useEffect } from "react";
import "../shared.css";
import "./DrumPadGroup.css";

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
    const audios = document.getElementsByClassName("clip");
    // stop current audio from playing
    audios.forEach((item) => {
      item.pause();
      item.currentTime = 0;
    });
    const audio = document.getElementById(drumPadId);
    audio.currentTime = 0;
    audio.volume = props.volume;
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
            props.setDescription(item.description);
          }}
          disabled={props.power}
        >
          {item.key}
          <audio id={item.key} className="clip" src={item.audio}></audio>
        </button>
      ))}
    </div>
  );
};

export default DrumPadGroup;
