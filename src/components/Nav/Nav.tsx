import React from "react";

import { StyledUl, StyledDivider, StyledFlex } from "./Nav.styled";
import NavItem from "./NavItem/NavItem";
import Sorting from "../Sorting/Sorting";
import { useAppSelector } from "../../hooks/hooks";

interface NavProps {
  navList: string[];
}

const Nav: React.FC<NavProps> = (props) => {
  const filter = useAppSelector((state) => state.movies.filter);

  const checkIfActive = (item: string) => {
    if (item === 'all' && filter === '') {
      return 'active'
    } else if (filter === item){
      return 'active'
    } else {
      return ''
    }
  }

  return (
    <nav>
      <StyledFlex>
        <StyledUl>
          {props.navList.map((item, index) => (
            <NavItem index={index} navItem={item} key={item} className={checkIfActive(item)}/>
          ))}
        </StyledUl>
        <Sorting />
      </StyledFlex>
      <StyledDivider />
    </nav>
  );
};

export default Nav;
