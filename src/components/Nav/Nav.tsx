import React from "react";

import { StyledUl, StyledDivider, StyledFlex } from "./Nav.styled";
import NavItem from "./NavItem/NavItem";
import Filter from "../Filter/Filter";

interface NavProps {
    navList: string[];
    sortingHandler: (type: string) => void;
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
        <Filter sortingHandler={(type: string) => props.sortingHandler(type)} />
      </StyledFlex>
      <StyledDivider />
    </nav>
  );
};

export default Nav;
