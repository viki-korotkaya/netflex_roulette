import React from "react";

import Search from "../../components/Search/Search";
import Logo from "../../components/Logo/Logo";
import { TransparentButton } from "../../components/Button/Button.styled";
import { StyledHeader, StyledFlex } from "./Header.styled";

interface HeaderProps {
  open: boolean;
  toggleHandler: (mode?: string) => void;
}

const Header: React.FC<HeaderProps>  = (props) => {
  return (
    <StyledHeader >
      <StyledFlex>
        <Logo />
        <TransparentButton onClick={() => props.toggleHandler('add')}>+ Add movie</TransparentButton>
      </StyledFlex>
      <Search />
    </StyledHeader>
  );
};

export default Header;
