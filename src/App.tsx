import Block from "./Components/Block/Block";
import React from "react";
import { Content, BlockType } from "./Models/Model";
import "./App.scss";

function App() {
  let blocks: Content[] = [
    { id: 0, header: "Bowen", type: BlockType.intro },
    { id: 1, header: "test2", content: "Content", type: BlockType.content }
  ];
  return (
    <div className="App">
      {blocks.map((block: Content) => {
        return (
          <div key={block.id}>
            <Block type={block.type}>{block}</Block>
          </div>
        );
      })}
    </div>
  );
}

export default App;
