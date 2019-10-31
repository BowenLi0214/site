import Block from "./Components/Block/Block";
import React from "react";
import { Content } from "./Interface/Interface";
import "./App.scss";

function App() {
  let blocks: Content[] = [
    { id: 0, header: "Bowen" },
    { id: 1, header: "test2", content: "Content" }
  ];
  return (
    <div className="App">
      {blocks.map((block: Content) => {
        return (
          <div key={block.id}>
            <Block>{block}</Block>
          </div>
        );
      })}
    </div>
  );
}

export default App;
