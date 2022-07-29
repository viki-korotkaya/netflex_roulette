import styled from "styled-components";
import {
  backgroundMain,
  contextMenuSize,
  dotSize,
  dropDownWidth,
  mainFontColor,
  margin3,
  medium,
  mediumWeight,
  padding7,
  purpleDark,
  red,
} from "styles/global_varables";

export const StyledContextMenu = styled.div`
  width: ${contextMenuSize};
  height: ${contextMenuSize};
  background-color: ${purpleDark};
  border-radius: 50%;
  position: absolute;
  top: 14px;
  right: 14px;
  padding: ${padding7} 0;
  cursor: pointer;
  opacity: 0;
  &:hover {
  }
`;

export const StyledDot = styled.span`
  display: block;
  margin: ${margin3} auto;
  height: ${dotSize};
  width: ${dotSize};
  background-color: ${mainFontColor};
  border-radius: 50%;
`;

export const StyledDropDown = styled.div`
  width: ${dropDownWidth};
  background-color: ${backgroundMain};
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`;

export const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
`;

export const CloseBtn = styled.span`
  margin-left: auto;
  font-size: 25px;
  font-weight: ${mediumWeight};
  color: ${mainFontColor};
  cursor: pointer;
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: ${medium};
`;

export const StyledLi = styled.li`
  padding: 16px 30px;
  &:hover {
    background: ${red};
    color: ${mainFontColor};
  }
`;

export const Span = styled.span`
  color: inherit;
`;
