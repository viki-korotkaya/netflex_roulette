import React, { useState } from "react";

import {
  StyledContextMenu,
  StyledDot,
  StyledDropDown,
  CloseBtn,
  StyledFlex,
  StyledUl,
  Span,
  StyledLi,
} from "./ContextMenu.styled";

interface ContextMenuProps {
  editModalHandler: () => void;
  deleteModalHandler: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = (props) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const toggleDropDown = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  const handleClickEdit = () => {
    toggleDropDown();
    props.editModalHandler();
  };

  const handleClickDelete = () => {
    toggleDropDown();
    props.deleteModalHandler();
  };

  return (
    <>
      {isOpenDropDown ? (
        <StyledDropDown>
          <StyledFlex>
            <CloseBtn onClick={toggleDropDown}>&times;</CloseBtn>
          </StyledFlex>
          <StyledUl>
            <StyledLi onClick={handleClickEdit}>
              <Span>Edit</Span>
            </StyledLi>
            <StyledLi onClick={handleClickDelete}>
              <Span>Delete</Span>
            </StyledLi>
          </StyledUl>
        </StyledDropDown>
      ) : (
        <StyledContextMenu onClick={toggleDropDown}>
          <StyledDot />
          <StyledDot />
          <StyledDot />
        </StyledContextMenu>
      )}
    </>
  );
};

export default ContextMenu;
