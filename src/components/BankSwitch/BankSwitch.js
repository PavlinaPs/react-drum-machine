import React from "react";
import "../shared.css";
import "./BankSwitch.css";

const BankSwitch = ({
  bank,
  setBank,
  bankOneData,
  bankTwoData,
  setDescription,
  volume,
  power,
}) => {
  const switchToggle = () => {
    if (bank === bankOneData) {
      setBank(bankTwoData);
      setDescription("People");
    } else if (bank === bankTwoData) {
      setBank(bankOneData);
      setDescription("Drums");
    }
    const bankSwitchAudio = document.getElementById("bank-switch");
    bankSwitchAudio.volume = volume;
    bankSwitchAudio.play();
  };

  return (
    <button
      id="switch-toggle-button"
      className="switch-toggle-button"
      onClick={() => switchToggle()}
      disabled={power}
    >
      Switch sounds
      <audio
        id="bank-switch"
        src={require("../../assets/audio/mixkit-light-button-2580.wav")}
      ></audio>
    </button>
  );
};

export default BankSwitch;
