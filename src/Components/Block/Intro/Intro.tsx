import React from "react";
import "./Intro.scss";
import { Content } from "Models/Model";

interface Props {
  children?: Content;
}

const Intro = (props: Props) => {
  return <code className="introContainer"></code>;
};

export default Intro;
