// You can not directly import your json array from the JSON file in react. To achieve that you must store your JSON array in a variable and then export default your JSON array. By Doing this you can easily import it in your component.

const bankOneData = [
  {
    key: "Q",
    id: "KeyQ",
    description: "cowbell",
    audio: require("./assets/audio/bankOne/mixkit-cowbell-sharp-hit-1743.wav"),
  },
  {
    key: "W",
    id: "KeyW",
    description: "metal hammer",
    audio: require("./assets/audio/bankOne/mixkit-metal-hammer-hit-833.wav"),
  },
  {
    key: "E",
    id: "KeyE",
    description: "tribal dry drum",
    audio: require("./assets/audio/bankOne/mixkit-tribal-dry-drum-558.wav"),
  },
  {
    key: "A",
    id: "KeyA",
    description: "typewriter",
    audio: require("./assets/audio/bankOne/mixkit-typewriter-hit-1362.wav"),
  },
  {
    key: "S",
    id: "KeyS",
    description: "switch click",
    audio: require("./assets/audio/bankOne/mixkit-quick-switch-click-2582.wav"),
  },
  {
    key: "D",
    id: "KeyD",
    description: "switch tap",
    audio: require("./assets/audio/bankOne/mixkit-on-or-off-light-switch-tap-2585.wav"),
  },
  {
    key: "Z",
    id: "KeyZ",
    description: "hard typewriter hit",
    audio: require("./assets/audio/bankOne/mixkit-hard-typewriter-hit-1364.wav"),
  },
  {
    key: "X",
    id: "KeyX",
    description: "hand tribal drum",
    audio: require("./assets/audio/bankOne/mixkit-hand-tribal-drum-562.wav"),
  },
  {
    key: "C",
    id: "KeyC",
    description: "heavy stomp",
    audio: require("./assets/audio/bankOne/mixkit-quest-game-heavy-stomp-v-3049.wav"),
  },
];

export default bankOneData; // you must export it to use in another file
