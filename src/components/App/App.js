import { useState } from "react";
import Display from "../Display/Display";
import DrumPadGroup from "../DrumPadGroup/DrumPadGroup";

import "./App.css";

function App() {
  const [description, setDescription] = useState("Hello");
  return (
    <div id="drum-machine" className="App">
      <Display description={description} />
      <DrumPadGroup setDescription={setDescription} />
    </div>
  );
}

export default App;
