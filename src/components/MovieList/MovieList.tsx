import React from "react";

import { Mode, Movie } from "../../models/movie";
import MovieItem from "./MovieItem/MovieItem";
import { StyledFlex } from "./MovieList.styled";

interface MovieListProps {
  movies: Movie[];
  modalOpenHandler: (mode: Mode, movie?: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = (props) => {
  const { movies, modalOpenHandler } = props;
  return (
    <StyledFlex>
      {movies.map((movie) => (
        <MovieItem
          movie={movie}
          key={movie.id}
          modalOpenHandler={modalOpenHandler}
        />
      ))}
    </StyledFlex>
  );
};

export default MovieList;
