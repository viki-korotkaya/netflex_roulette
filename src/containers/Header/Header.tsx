import React from "react";

import Search from "../../components/Search/Search";
import Logo from "../../components/Logo/Logo";
import { TransparentButton } from "../../components/Button/Button.styled";
import { StyledHeader, StyledFlex } from "./Header.styled";

const Header: React.FC = () => {
  const callHandler = () => {
    return console.log(1);
  };
  return (
    <StyledHeader>
      <StyledFlex>
        <Logo />
        <TransparentButton onClick={callHandler}>+ Add movie</TransparentButton>
      </StyledFlex>
      <Search />
    </StyledHeader>
  );
};

export default Header;
