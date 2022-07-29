import React from "react";

import { StyledFlex, SearchInput } from "components/Search/SearchBar/SearchBar.styled";
import { PrimaryButton } from "components/Button/Button.styled";

const SearchBar: React.FC = () => {
  const callHandler = () => {};
  return (
    <form>
      <StyledFlex>
        <SearchInput
          type="text"
          id="header-search"
          placeholder="What do you want to watch?"
          name="searchbar"
        />
        <PrimaryButton onClick={callHandler}>Search</PrimaryButton>
      </StyledFlex>
    </form>
  );
};

export default SearchBar;
