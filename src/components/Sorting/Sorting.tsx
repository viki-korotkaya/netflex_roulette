import React, { ChangeEvent } from "react";
import { useAppDispatch } from "hooks/hooks";
import { moviesAction } from "features/movies/moviesSelector";
import {
  StyledSortingDiv,
  StyledFlex,
  Select,
  SelectWrapper,
} from "components/Sorting/Sorting.styled";
import { useSearchParams } from "react-router-dom";

const Sorting: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("sortBy") || "";
  const dispatch = useAppDispatch();

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const sortingType = e.target.value;
    searchParams.set("sortBy", sortingType);
    setSearchParams(searchParams);
    dispatch(moviesAction.resetState());
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
