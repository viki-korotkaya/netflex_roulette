import React from "react";

import { StyledLi, StyledA } from "./NavItem.styled";

interface NavItemProps {
  navItem: string;
  index: number;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <StyledLi index={props.index}>
      <StyledA href="#">{props.navItem}</StyledA>
    </StyledLi>
  );
};

export default NavItem;
