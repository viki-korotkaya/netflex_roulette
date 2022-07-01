import styled from "styled-components";
import {
  red,
  marginArrowLeft,
  margin30,
  baseWeight,
  medium,
  whiteCoconut,
  mediumWeight,
  borderSideTriangle,
  borderTopTriangle,
} from "../../styles/global_varables";

export const StyledFilterDiv = styled.div`
  margin-right: ${margin30};
  font-weight: ${baseWeight};
  font-size: ${medium};
  line-height: 19.5px;
  text-transform: uppercase;
  color: ${whiteCoconut};
`;

export const StyledDiv = styled.div`
  font-weight: ${mediumWeight};
  font-size: ${medium};
  line-height: 19.5px;
  text-transform: uppercase;
`;

export const StyledArrowDown = styled.div`
  display: inline-block;
  margin-left: ${marginArrowLeft};
  width: 0;
  height: 0;
  border-left: ${borderSideTriangle} solid transparent;
  border-right: ${borderSideTriangle} solid transparent;
  border-top: ${borderTopTriangle} solid ${red};
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`;
