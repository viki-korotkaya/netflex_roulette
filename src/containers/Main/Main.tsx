import React, { useState, useEffect } from "react";

import { StyledMain, StyledSumDiv } from "./Main.styled";
import { nav } from "../../assets/data/constData";
import Nav from "../../components/Nav/Nav";
import MovieList from "../../components/MovieList/MovieList";
import { Movie, Mode } from "../../models/movie";

interface MainProps {
  openModal: (mode: Mode, movie?: Movie) => void;
  movieList: Movie[];
}

const Main: React.FC<MainProps> = (props) => {
  const [sortedData, setSortedData] = useState<Movie[]>(props.movieList);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    let sorted;
    if (sortType === "releaseDate") {
      sorted = [...props.movieList].sort(
        (a, b) => +new Date(b[sortType]) - +new Date(a[sortType])
      );
    } else if (sortType === "title") {
      sorted = [...props.movieList].sort((a, b) =>
        a[sortType].localeCompare(b[sortType])
      );
    } else {
      sorted = [...props.movieList];
    }
    setSortedData(sorted);
  }, [props.movieList, sortType]);

  const changeSorting = (type: string) => {
    setSortType(type);
  };

  return (
    <StyledMain>
      <Nav navList={nav} sortingHandler={changeSorting} />
      <StyledSumDiv>{`${sortedData.length} movie found`}</StyledSumDiv>
      <MovieList movies={sortedData} modalOpenHandler={props.openModal} />
    </StyledMain>
  );
};

export default Main;
