import React from "react";

import Search from "../../components/Search/Search";
import Logo from "../../components/Logo/Logo";
import { TransparentButton } from "../../components/Button/Button.styled";
import { StyledHeader, StyledFlex } from "./Header.styled";
import { Mode } from "../../models/movie";
import { useAppContext } from "../../hooks/useAppContext";

const Header: React.FC = () => {
  const { openModalHandler } = useAppContext();
  return (
    <StyledHeader>
      <StyledFlex>
        <Logo />
        <TransparentButton onClick={() => openModalHandler(Mode.Add)}>
          + Add movie
        </TransparentButton>
      </StyledFlex>
      <Search />
    </StyledHeader>
  );
};

export default Header;
