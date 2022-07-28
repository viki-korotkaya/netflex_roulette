import React, { ChangeEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { moviesAction } from "../../features/movies/moviesSelector";
import {
  StyledSortingDiv,
  StyledFlex,
  Select,
  SelectWrapper,
} from "./Sorting.styled";


const Sorting: React.FC = () => {
  const type = useAppSelector((state) => state.movies.sortBy);
  const dispatch = useAppDispatch();

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const sortingType = e.target.value;
    dispatch(moviesAction.setSortingParams(sortingType))
  };

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
    </StyledFlex>
  );
};

export default Sorting;
