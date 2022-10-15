// You can not directly import your json array from the JSON file in react. To achieve that you must store your JSON array in a variable and then export default your JSON array. By Doing this you can easily import it in your component.

const bankOneData = [
  {
    key: "Q",
    id: "KeyQ",
    description: "small group applause",
    audio: require("../assets/audio/bankTwo/mixkit-animated-small-group-applause-523.wav"),
  },
  {
    key: "W",
    id: "KeyW",
    description: "clapping fast",
    audio: require("../assets/audio/bankTwo/mixkit-clapping-fast-480.wav"),
  },
  {
    key: "E",
    id: "KeyE",
    description: "happy child laughing",
    audio: require("../assets/audio/bankTwo/mixkit-happy-child-laughing-2265.wav"),
  },
  {
    key: "A",
    id: "KeyA",
    description: "child giggle",
    audio: require("../assets/audio/bankTwo/mixkit-kid-giggle-laugh-431.wav"),
  },
  {
    key: "S",
    id: "KeyS",
    description: "child sneeze",
    audio: require("../assets/audio/bankTwo/mixkit-little-child-sneeze-2211.wav"),
  },
  {
    key: "D",
    id: "KeyD",
    description: "thank you",
    audio: require("../assets/audio/bankTwo/mixkit-old-cartoon-says-thank-you-383.wav"),
  },
  {
    key: "Z",
    id: "KeyZ",
    description: "party trumpet",
    audio: require("../assets/audio/bankTwo/mixkit-party-trumpet-horn-isolated-526.wav"),
  },
  {
    key: "X",
    id: "KeyX",
    description: "funny kiss",
    audio: require("../assets/audio/bankTwo/mixkit-quick-funny-kiss-2193.wav"),
  },
  {
    key: "C",
    id: "KeyC",
    description: "audience clapping",
    audio: require("../assets/audio/bankTwo/mixkit-rhythmic-audience-clapping-loop-522.wav"),
  },
];

export default bankOneData; // must be exported to use it in another file
