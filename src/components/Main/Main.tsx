import React from "react";

import { StyledMain, StyledSumDiv } from "components/Main/Main.styled";
import { nav } from "assets/data/constData";
import Nav from "components/Nav/Nav";
import MovieList from "components/MovieList/MovieList";
import { useAppSelector } from "hooks/hooks";

const Main: React.FC = () => {
  const moviesList = useAppSelector((state) => state.movies.moviesList);

  return (
    <StyledMain>
      <Nav navList={nav} />
      <StyledSumDiv>{`${moviesList.length} movie found`}</StyledSumDiv>
      <MovieList />
    </StyledMain>
  );
};

export default Main;
