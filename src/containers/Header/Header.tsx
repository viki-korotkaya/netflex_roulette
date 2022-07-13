import React, {useState} from "react";

import Search from "../../components/Search/Search";
import Logo from "../../components/Logo/Logo";
import { TransparentButton } from "../../components/Button/Button.styled";
import { StyledHeader, StyledFlex } from "./Header.styled";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import {initialState} from "../../assets/data/constData";

interface HeaderProps {
  open: boolean;
  toggleHandler: (mode?: string) => void;
}

const Header: React.FC<HeaderProps>  = (props) => {
  // const [openModal, setOpenModal] = useState(false);
  // const callHandler = () => {
  //     setOpenModal(!openModal);
  // };
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
