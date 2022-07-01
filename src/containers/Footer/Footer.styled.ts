import styled from "styled-components";
import {
  greyLight,
  mainWidth,
  paddingYFooter,
} from "../../styles/global_varables";

export const StyledFooter = styled.footer`
  max-width: ${mainWidth};
  margin: 0 auto;
  padding: ${paddingYFooter} 0;
  background-color: ${greyLight};
  text-align: center;
`;
