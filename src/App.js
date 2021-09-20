import React from "react";
import { Counter } from "./Components/Counter/Counter";
import { Clock } from "./Components/Clock/Clock";
import { Timer } from "./Components/Timer/Timer";
import { EmojiList } from "./Components/Emoji";
import Emoji from "./Components/Emoji/Emoji.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <Clock />
      <Timer />
      <EmojiList dataBase={Emoji} />
    </div>
  );
}

export default App;
