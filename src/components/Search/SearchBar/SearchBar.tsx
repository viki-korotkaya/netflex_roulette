import React from "react";
import { useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import {
  StyledFlex,
  SearchInput,
} from "components/Search/SearchBar/SearchBar.styled";
import { PrimaryButton } from "components/Button/Button.styled";
import { moviesAction } from "features/movies/moviesSelector";
import { useAppDispatch } from "hooks/hooks";

const SearchBar: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      searchbar: "",
    },
    onSubmit: (values) => callHandler(values.searchbar),
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const callHandler = (text: string) => {
    searchParams.set("searchKey", text);
    setSearchParams(searchParams);
    dispatch(moviesAction.resetState());
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <StyledFlex>
        <SearchInput
          type="text"
          id="header-search"
          placeholder="What do you want to watch?"
          name="searchbar"
          onChange={formik.handleChange}
          value={formik.values.searchbar}
        />
        <PrimaryButton type="submit">Search</PrimaryButton>
      </StyledFlex>
    </form>
  );
};

export default SearchBar;
