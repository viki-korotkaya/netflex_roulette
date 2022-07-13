import React from "react";

import { Movie } from "../../models/movie";
import MovieItem from "./MovieItem/MovieItem";
import { StyledFlex } from "./MovieList.styled";

interface MovieListProps {
  movies: Movie[];
  openModal: boolean;
  modalOpenHandler: (mode?: string, state?: any) => void;
}

const MovieList: React.FC<MovieListProps> = (props) => {
  const { movies, openModal, modalOpenHandler } = props;
  return (
    <StyledFlex>
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} openModal={openModal} modalOpenHandler={modalOpenHandler} />
      ))}
    </StyledFlex>
  );
};

export default MovieList;
