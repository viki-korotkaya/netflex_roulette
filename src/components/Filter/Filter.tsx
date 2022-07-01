import React from "react";

import {
  StyledFilterDiv,
  StyledDiv,
  StyledArrowDown,
  StyledFlex,
} from "./Filter.styled";
import { sortBy } from "../../assets/data/constData";

const Filter: React.FC = () => {
  return (
    <StyledFlex>
      <StyledFilterDiv>Sort by</StyledFilterDiv>
      <StyledDiv>
        {sortBy[0]}
        <StyledArrowDown />
      </StyledDiv>
      {/*<Dropdown />*/}
    </StyledFlex>
  );
};

export default Filter;
