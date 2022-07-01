import React from "react";

import { Movie } from "../../models/movie";
import MovieItem from "./MovieItem/MovieItem";
import { StyledFlex } from "./MovieList.styled";

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = (props) => {
  const { movies } = props;
  return (
    <StyledFlex>
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </StyledFlex>
  );
};

export default MovieList;
