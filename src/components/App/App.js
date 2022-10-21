import { useState } from "react";
import Power from "../Power/Power";
import Volume from "../Volume/Volume";
import BankSwitch from "../BankSwitch/BankSwitch";
import Display from "../Display/Display";
import DrumPadGroup from "../DrumPadGroup/DrumPadGroup";
import greet from "../../data/greet";
import bankOneData from "../../data/bankOneData";
import bankTwoData from "../../data/bankTwoData";
import "../shared.css";
import "./App.css";

function App() {
  const [power, setPower] = useState(false);
  const [description, setDescription] = useState(greet());
  const [bank, setBank] = useState(bankOneData);
  const [volume, setVolume] = useState("0.5");

  return (
    <div id="drum-machine" className="App">
      <div className="title-power-container">
        <h1>Drum Machine</h1>
        <Power
          power={power}
          setPower={setPower}
          setDescription={setDescription}
          greet={greet}
        />
      </div>
      <Volume volume={volume} setVolume={setVolume} power={power} />
      <BankSwitch
        setBank={setBank}
        bank={bank}
        volume={volume}
        power={power}
        bankOneData={bankOneData}
        bankTwoData={bankTwoData}
        setDescription={setDescription}
      />
      <Display description={description} />
      <DrumPadGroup
        setDescription={setDescription}
        bank={bank}
        volume={volume}
        power={power}
      />
    </div>
  );
}

export default App;
