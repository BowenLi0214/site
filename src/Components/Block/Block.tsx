import React from "react";
import "./Block.scss";
import { Content } from "../../Interface/Interface";
interface Props {
  children?: Content;
}

const Block = (props: Props) => {
  let content = props.children;
  return (
    <div className="blockContainer">
      <div>{content && content.header}</div>
      <div>{content && content.content}</div>
    </div>
  );
};

export default Block;
