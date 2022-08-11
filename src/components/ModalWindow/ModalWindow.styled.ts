import styled from "styled-components";
import {
  backgroundMain,
  darkTransparent,
  mainFontColor,
  mediumWeight,
} from "styles/global_varables";

export const StyledModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${darkTransparent};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: ${backgroundMain};
  padding: 20px 60px 60px 60px;
`;

export const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseBtn = styled.span`
  margin-left: auto;
  font-size: 30px;
  font-weight: ${mediumWeight};
  color: ${mainFontColor};
  cursor: pointer;
`;
