import React, {SyntheticEvent, useState} from "react";

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

  const toggleDropDown = (e: SyntheticEvent) => {
    setIsOpenDropDown(!isOpenDropDown);
    e.stopPropagation();
  };

  const handleClickEdit = (e: SyntheticEvent) => {
    toggleDropDown(e);
    props.editModalHandler();
  };

  const handleClickDelete = (e: SyntheticEvent) => {
    toggleDropDown(e);
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
