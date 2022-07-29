import React from "react";

import { StyledInput } from "components/Input/Input.styled";

export interface InputProps {
  type: string;
  id: string;
  placeholder: string;
  name: string;
}

const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
