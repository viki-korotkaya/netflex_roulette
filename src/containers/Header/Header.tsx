import React, {useState} from "react";

import Search from "../../components/Search/Search";
import Logo from "../../components/Logo/Logo";
import { TransparentButton } from "../../components/Button/Button.styled";
import { StyledHeader, StyledFlex } from "./Header.styled";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import {initialState} from "../../assets/data/constData";

const Header: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const callHandler = () => {
      setOpenModal(!openModal);
  };
  return (
    <StyledHeader >
      <StyledFlex>
        <Logo />
        <TransparentButton onClick={callHandler}>+ Add movie</TransparentButton>
      </StyledFlex>
      <Search />
      {openModal && <ModalWindow closeHandler={callHandler} initialState={initialState} mode="add" />}
    </StyledHeader>
  );
};

export default Header;
