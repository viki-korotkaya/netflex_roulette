import React from "react";

import {
  StyledFlex,
  StyledMovieItem,
  StyledMovieTitle,
  StyledMovieYear,
} from "./MovieItem.styled";
import ContextMenu from "../../ContextMenu/ContextMenu";
import { Mode, Movie } from "../../../models/movie";
import { useAppDispatch } from "../../../hooks/hooks";
import { fetchMovie } from "../../../features/movies/moviesSelector";
import { modalWindowAction } from "../../../features/modalWindow/modalWindowSelector";

interface MovieProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieProps> = ({ movie }) => {
  const { title, movieUrl, tagline, releaseDate, id } = movie;
  const dispatch = useAppDispatch();

  const openEditModal = () => {
    dispatch(modalWindowAction.openModal({mode: Mode.Edit, editedMovie: movie}));
  };

  const openDeleteModal = () => {
    dispatch(modalWindowAction.openModal({mode: Mode.Delete, editedMovie: movie}));
  };

  const getMovie = () => {
    dispatch(fetchMovie(id));
  }

  return (
    <StyledMovieItem onClick={getMovie}>
      <ContextMenu
        editModalHandler={openEditModal}
        deleteModalHandler={openDeleteModal}
      />

      <div>
        <img src={movieUrl} alt={title} />
      </div>
      <StyledFlex>
        <StyledMovieTitle>{title}</StyledMovieTitle>
        <StyledMovieYear>{releaseDate.split("-")[0]}</StyledMovieYear>
      </StyledFlex>
      <div>{tagline}</div>
    </StyledMovieItem>
  );
};

export default MovieItem;
