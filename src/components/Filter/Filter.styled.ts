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
  borderTopTriangle, backgroundMain, mainFontColor, xlarge, backgroundGrey,
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

export const SelectWrapper = styled.div`
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
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
  -moz-appearance:none; /* Firefox */
  -webkit-appearance:none; /* Safari and Chrome */
  appearance:none;
  grid-area: select;
  cursor: pointer;
  text-transform: uppercase;
  // background-image: linear-gradient(45deg, transparent 50%, ${red} 50%),
  // linear-gradient(135deg, ${red} 50%, transparent 50%);
  // background-position:
  //         calc(100% - 20px) calc(1em + 2px),
  //         calc(100% - 15px) calc(1em + 2px),
  //         calc(100% - .5em) .5em;
  // background-size:
  //         5px 5px,
  //         5px 5px,
  //         1.5em 1.5em;
  // background-repeat: no-repeat;
`;
