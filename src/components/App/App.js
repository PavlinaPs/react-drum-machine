import { useState } from "react";
import BankSwitch from "../BankSwitch/BankSwitch";
import Display from "../Display/Display";
import DrumPadGroup from "../DrumPadGroup/DrumPadGroup";
import bankOneData from "../../data/bankOneData";
import bankTwoData from "../../data/bankTwoData";
import "./App.css";

function App() {
  const [description, setDescription] = useState("Hello");
  const [bank, setBank] = useState(bankTwoData);

  return (
    <div id="drum-machine" className="App">
      <BankSwitch
        setBank={setBank}
        bank={bank}
        bankOneData={bankOneData}
        bankTwoData={bankTwoData}
        setDescription={setDescription}
      />
      <Display description={description} />
      <DrumPadGroup setDescription={setDescription} bank={bank} />
    </div>
  );
}

export default App;
