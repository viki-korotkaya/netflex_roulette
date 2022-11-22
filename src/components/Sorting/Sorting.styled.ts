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
  mainFontColor,
  black,
} from "styles/global_varables";

export const StyledSortingDiv = styled.div`
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

export const SelectWrapper = styled.div`
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
`;

export const ArrowWrapper = styled.div`
  cursor: pointer;
  display: grid;
  place-items: center;
`;

export const ArrowDown = styled.div`
  display: grid;
  &:after {
    content: "";
    width: 12px;
    height: 7px;
    background-color: ${red};
    grid-area: select;
    justify-self: end;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
`;

export const ArrowUp = styled.div`
  display: grid;
  &:after {
    content: "";
    width: 12px;
    height: 7px;
    background-color: ${red};
    grid-area: select;
    justify-self: end;
    clip-path: polygon(50% 0%,0 100%,100% 100%);
  }
`;

export const Select = styled.select`
  width: 160px;
  background-color: transparent;
  border: none;
  outline: 0;
  margin: 0;
  padding: 0 1em 0 0;
  color: ${mainFontColor};
  font-weight: ${mediumWeight};
  font-size: ${medium};
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  grid-area: select;
  cursor: pointer;
  text-transform: uppercase;
  & > option {
    color: ${black};
  }
`;
