import React, { useState } from "react";

import {
  StyledFilterDiv,
  StyledFlex,
  Select,
  SelectWrapper,
} from "./Filter.styled";

interface FilterProps {
  sortingHandler: (type: string) => void;
}

const Filter: React.FC<FilterProps> = (props) => {
  const [type, setType] = useState("default");

  const handleOnChange = (sortingType: string) => {
    setType(sortingType);
    props.sortingHandler(sortingType);
  };

  return (
    <StyledFlex>
      <StyledFilterDiv>Sort by</StyledFilterDiv>
      <SelectWrapper>
        <Select value={type} onChange={(e) => handleOnChange(e.target.value)}>
          <option value="default" disabled>
            Sort option:
          </option>
          <option value="release_date">Release Date</option>
          <option value="title">Title</option>
        </Select>
      </SelectWrapper>
    </StyledFlex>
  );
};

export default Filter;
