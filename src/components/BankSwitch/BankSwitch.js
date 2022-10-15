import React from "react";

const BankSwitch = ({
  bank,
  setBank,
  bankOneData,
  bankTwoData,
  setDescription,
}) => {
  const switchToggle = () => {
    if (bank === bankOneData) {
      setBank(bankTwoData);
      setDescription("PEOPLE");
    } else if (bank === bankTwoData) {
      setBank(bankOneData);
      setDescription("DRUMS");
    }
    const bankSwitchAudio = document.getElementById("bank-switch");
    bankSwitchAudio.play();
  };

  return (
    <button id="switch-toggle-button" onClick={() => switchToggle()}>
      Bank Switch
      <audio
        id="bank-switch"
        src={require("../../assets/audio/mixkit-light-button-2580.wav")}
      ></audio>
    </button>
  );
};

export default BankSwitch;
