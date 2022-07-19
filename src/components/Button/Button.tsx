import React, { ReactNode } from "react";
import { StyledButton } from "./Button.styled";

export interface ButtonProps {
  children: string | ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type: "button" | "submit" | "reset" | undefined;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton
      type={props.type ? props.type : "button"}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
