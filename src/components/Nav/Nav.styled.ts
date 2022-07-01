import styled from "styled-components";
import {
  black,
  border,
  dividerHeight,
  greyLight,
  paddingY,
} from "../../styles/global_varables";

export const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${paddingY} 0;
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const StyledDivider = styled.div`
  height: ${dividerHeight};
  background-color: ${greyLight};
  border-bottom: ${border} solid ${black};
`;
