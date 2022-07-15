import React from "react";

import Search from "../../components/Search/Search";
import Logo from "../../components/Logo/Logo";
import { TransparentButton } from "../../components/Button/Button.styled";
import { StyledHeader, StyledFlex } from "./Header.styled";
import { Mode, Movie } from "../../models/movie";

interface HeaderProps {
  openModal: (mode: Mode, movie?: Movie) => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <StyledHeader>
      <StyledFlex>
        <Logo />
        <TransparentButton onClick={() => props.openModal(Mode.Add)}>
          + Add movie
        </TransparentButton>
      </StyledFlex>
      <Search />
    </StyledHeader>
  );
};

export default Header;
