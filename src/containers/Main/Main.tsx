import React, { useState, useMemo } from "react";

import { StyledMain, StyledSumDiv } from "./Main.styled";
import { nav } from "../../assets/data/constData";
import Nav from "../../components/Nav/Nav";
import MovieList from "../../components/MovieList/MovieList";
import { Movie } from "../../models/movie";

interface MainProps {
  movieList: Movie[];
}

function callSorting(data: Movie[], sortType: string): Movie[] {
  let sorted;
  if (sortType === "release_date") {
    sorted = [...data].sort(
      (a, b) => +new Date(b[sortType]) - +new Date(a[sortType])
    );
  } else if (sortType === "title") {
    sorted = [...data].sort((a, b) => a[sortType].localeCompare(b[sortType]));
  } else {
    sorted = [...data];
  }
  return sorted;
}

const Main: React.FC<MainProps> = (props) => {
  const [sortType, setSortType] = useState("");

  const sortedData = useMemo(
    () => callSorting(props.movieList, sortType),
    [props.movieList, sortType]
  );

  const changeSorting = (type: string) => {
    setSortType(type);
  };

  return (
    <StyledMain>
      <Nav navList={nav} sortingHandler={changeSorting} />
      <StyledSumDiv>{`${sortedData.length} movie found`}</StyledSumDiv>
      <MovieList movies={sortedData} />
    </StyledMain>
  );
};

export default Main;
