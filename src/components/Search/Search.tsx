import React from "react";

import { StyledSearch } from "./Search.styled";
import Title from "../Title/Title";
import SearchBar from "./SearchBar/SearchBar";

const Search: React.FC = () => {
  return (
    <StyledSearch>
      <Title children="Find your movie" />
      <SearchBar />
    </StyledSearch>
  );
};

export default Search;
