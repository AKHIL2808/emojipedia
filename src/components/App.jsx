import React from "react";
import Card from "./Card";
import Emojis from "../emojipedia";
function createEmoji(emoji) {
  return (
    <Card
      key={emoji.id}
      logo={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{Emojis.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
