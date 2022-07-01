import styled from "styled-components";
import {
  contextMenuSize,
  dotSize,
  mainFontColor,
  margin3,
  padding7,
  purpleDark,
} from "../../styles/global_varables";

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
