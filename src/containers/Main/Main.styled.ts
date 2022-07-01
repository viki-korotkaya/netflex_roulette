import styled from "styled-components";
import {
  backgroundMain,
  xlarge,
  largeWeight,
  mainWidth,
  marginMainTop,
  marginSumTop,
  paddingX,
} from "../../styles/global_varables";

export const StyledMain = styled.section`
  background-color: ${backgroundMain};
  max-width: ${mainWidth};
  margin: ${marginMainTop} auto 0;
  padding: 0 ${paddingX};
`;

export const StyledSumDiv = styled.div`
  margin: ${marginSumTop} 0;
  font-size: ${xlarge};
  font-weight: ${largeWeight};
  line-height: 24.5px;
`;
