import React from "react";

import { StyledContextMenu, StyledDot } from "./ContextMenu.styled";

const ContextMenu: React.FC = () => {
  const openDropDowm = () => {
    console.log(3);
  };
  return (
    <StyledContextMenu onClick={openDropDowm}>
      <StyledDot />
      <StyledDot />
      <StyledDot />
    </StyledContextMenu>
  );
};

export default ContextMenu;
