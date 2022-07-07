import React, {useState} from "react";

import { StyledMain, StyledSumDiv } from "./Main.styled";
import { movieList, nav } from "../../assets/data/constData";
import Nav from "../../components/Nav/Nav";
import MovieList from "../../components/MovieList/MovieList";

const Main: React.FC = () => {
  return (
    <StyledMain>
      <Nav navList={nav} />
      <StyledSumDiv>39 movie found</StyledSumDiv>
      <MovieList movies={movieList} />
    </StyledMain>
  );
};

export default Main;
