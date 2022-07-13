import React, {useState, useEffect} from "react";

import { StyledMain, StyledSumDiv } from "./Main.styled";
import { movieList, nav } from "../../assets/data/constData";
import Nav from "../../components/Nav/Nav";
import MovieList from "../../components/MovieList/MovieList";
import {Movie} from "../../models/movie";

interface MainProps {
  open: boolean;
  toggleHandler: (mode?: string, state?: any) => void;
  movieList: Movie[];
}

const Main: React.FC<MainProps> = (props) => {
  const [data, setData] = useState<Movie[]>([]);
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    const sortArray = (type: string) => {
      let sorted = [];
      if (sortType === 'releaseDate') {
        // @ts-ignore
        sorted = [...data].sort((a, b) => new Date(b[sortType]) - new Date(a[sortType]));
      } else if (sortType === 'name') {
        sorted = [...data].sort((a, b) => a[sortType].localeCompare(b[sortType]));
      } else {
        sorted = [...data];
      }
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  useEffect(() => setData(props.movieList), [props.movieList]);

  const changeSorting = (type: string) => {
    setSortType(type);
  }

  return (
    <StyledMain>
      <Nav navList={nav} sortingHandler={(type) => changeSorting(type)} />
      <StyledSumDiv>39 movie found</StyledSumDiv>
      <MovieList movies={data} openModal={props.open} modalOpenHandler={props.toggleHandler} />
    </StyledMain>
  );
};

export default Main;
