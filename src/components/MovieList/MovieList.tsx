import React from "react";

import MovieItem from "./MovieItem/MovieItem";
import { StyledFlex } from "./MovieList.styled";
import { useAppSelector } from "../../hooks/hooks";

const MovieList: React.FC = () => {
  const moviesList = useAppSelector((state) => state.movies.moviesList);

  return (
    <StyledFlex>
      {moviesList.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </StyledFlex>
  );
};

export default MovieList;
