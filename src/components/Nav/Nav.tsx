import React from "react";

import { StyledUl, StyledDivider, StyledFlex } from "components/Nav/Nav.styled";
import NavItem from "components/Nav/NavItem/NavItem";
import Sorting from "components/Sorting/Sorting";

interface NavProps {
  navList: string[];
}

const Nav: React.FC<NavProps> = (props) => {
  return (
    <nav>
      <StyledFlex>
        <StyledUl>
          {props.navList.map((item, index) => (
            <NavItem index={index} navItem={item} key={item} />
          ))}
        </StyledUl>
        <Sorting />
      </StyledFlex>
      <StyledDivider />
    </nav>
  );
};

export default Nav;
