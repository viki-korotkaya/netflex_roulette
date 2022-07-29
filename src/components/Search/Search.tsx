import React from "react";

import { StyledSearch } from "components/Search/Search.styled";
import Title from "components/Title/Title";
import SearchBar from "components/Search/SearchBar/SearchBar";

const Search: React.FC = () => {
  return (
    <StyledSearch>
      <Title children="Find your movie" />
      <SearchBar />
    </StyledSearch>
  );
};

export default Search;
