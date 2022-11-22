import React, { ChangeEvent, useState } from "react";
import { useAppDispatch } from "hooks/hooks";
import { moviesAction } from "features/movies/moviesSelector";
import {
  StyledSortingDiv,
  StyledFlex,
  Select,
  SelectWrapper,
  ArrowWrapper,
  ArrowDown,
  ArrowUp
} from "components/Sorting/Sorting.styled";
import { useSearchParams } from "react-router-dom";
import { SortOrder } from "models/movie";

const Sorting: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("sortBy") || "";
  const [sortingArrow, setSortingArrow] = useState('down');
  const dispatch = useAppDispatch();

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const sortingType = e.target.value;
    searchParams.set("sortBy", sortingType);
    setSearchParams(searchParams);
    dispatch(moviesAction.resetState());
  };

  const toggleSortingArrow = () => {
    if (sortingArrow === 'down') {
      setSortingArrow('up')
    } else {
      setSortingArrow('down')
    }
  }

  return (
    <StyledFlex>
      <StyledSortingDiv>Sort by</StyledSortingDiv>
      <SelectWrapper>
        <Select value={type} onChange={(e) => handleOnChange(e)}>
          <option value="" disabled>
            Sort option:
          </option>
          <option value="release_date">Release Date</option>
          <option value="title">Title</option>
        </Select>
      </SelectWrapper>
      <ArrowWrapper onClick={toggleSortingArrow}>
        {sortingArrow === 'down' ? <ArrowDown /> : <ArrowUp /> }
      </ArrowWrapper>
    </StyledFlex>
  );
};

export default Sorting;
