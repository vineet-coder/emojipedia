import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "🤘": "YOLO",
  "✋": "Hello",
  "👌": "Ok",
  "👋": "Slap",
  "👊": "Fist",
  "🤝": "Hand Shake"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeanig] = useState("");

  function onChangeHandler(event) {
    var input = event.target.value;
    var emojiMeaning = emojiDictionary[input];

    if (emojiMeaning === undefined) {
      emojiMeaning = "this emoji is not inour datbase!!";
    }

    setMeanig(emojiMeaning);
  }

  function onClickHandler(emoji) {
    var iconMeaning = emojiDictionary[emoji];
    setMeanig(iconMeaning);
  }

  return (
    <div className="App">
      <h1>Various Hand Emojis</h1>
      <input onChange={onChangeHandler}></input>
      <h4>Meaning</h4>
      <h2>{meaning}</h2>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => onClickHandler(emoji)}
            style={{ fontSize: "1.9rem", cursor: "pointer", padding: "0.5rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
