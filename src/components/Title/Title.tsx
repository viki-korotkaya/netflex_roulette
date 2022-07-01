import React from "react";
import { StyledTitle } from "./StyledTitle";

export interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = (props) => {
  return <StyledTitle>{props.children}</StyledTitle>;
};

export default Title;
