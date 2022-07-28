import React from "react";

import Search from "../../components/Search/Search";
import Logo from "../../components/Logo/Logo";
import { TransparentButton } from "../../components/Button/Button.styled";
import { StyledHeader, StyledFlex } from "./Header.styled";
import { Mode } from "../../models/movie";
import { useAppDispatch } from "../../hooks/hooks";
import { modalWindowAction } from "../../features/modalWindow/modalWindowSelector";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const openModalHandler = () => {
    dispatch(modalWindowAction.openModal(Mode.Add));
  }

  return (
    <StyledHeader>
      <StyledFlex>
        <Logo />
        <TransparentButton onClick={openModalHandler}>
          + Add movie
        </TransparentButton>
      </StyledFlex>
      <Search />
    </StyledHeader>
  );
};

export default Header;
