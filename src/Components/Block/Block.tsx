import React from "react";
import "./Block.scss";
import Intro from "./Intro/Intro";
import { Content, BlockType } from "Models/Model";

interface Props {
  children?: Content;
  type: BlockType;
}

const Block = (props: Props) => {
  let content;
  console.log(props.type);
  switch (props.type) {
    case BlockType.intro:
      content = <Intro />;
      break;
  }
  return (
    <div className={[BlockType.intro, "blockContainer"].join(" ")}>
      {content}
    </div>
  );
};

export default Block;
