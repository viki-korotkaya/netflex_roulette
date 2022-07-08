import React, {useState, useEffect} from "react";

import { StyledMain, StyledSumDiv } from "./Main.styled";
import { movieList, nav } from "../../assets/data/constData";
import Nav from "../../components/Nav/Nav";
import MovieList from "../../components/MovieList/MovieList";

const Main: React.FC = () => {
  const [data, setData] = useState(movieList);
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    const sortArray = (type: string) => {
      let sorted = [];
      if (sortType === 'releaseDate') {
        sorted = [...movieList].sort((a, b) => +b[sortType] - +a[sortType]);
      } else if (sortType === 'name') {
        sorted = [...movieList].sort((a, b) => a[sortType].localeCompare(b[sortType]));
      } else {
        sorted = [...movieList];
      }

      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  const changeSorting = (type: string) => {
    setSortType(type);
  }

  return (
    <StyledMain>
      <Nav navList={nav} sortingHandler={(type) => changeSorting(type)} />
      <StyledSumDiv>39 movie found</StyledSumDiv>
      <MovieList movies={data} />
    </StyledMain>
  );
};

export default Main;
