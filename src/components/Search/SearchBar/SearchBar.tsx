import React from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const dispatch = useAppDispatch();

  const callHandler = (text: string) => {
    router.replace({
      query: { ...router.query, searchKey: text },
    });
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
