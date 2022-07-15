import React from "react";

import {
  StyledFlex,
  StyledMovieItem,
  StyledMovieTitle,
  StyledMovieYear,
} from "./MovieItem.styled";
import ContextMenu from "../../ContextMenu/ContextMenu";
import { Mode, Movie } from "../../../models/movie";

interface MovieProps {
  movie: Movie;
  modalOpenHandler: (mode: Mode, movie?: Movie) => void;
}

const MovieItem: React.FC<MovieProps> = ({ movie, modalOpenHandler }) => {
  const { title, url, genre, releaseDate } = movie;

  const openEditModal = () => {
    modalOpenHandler(Mode.EDIT, movie);
  };

  const openDeleteModal = () => {
    modalOpenHandler(Mode.DELETE, movie);
  };

  const getMovieSrc = (url: string): string => {
    return `/images/${url}.png`;
  };

  return (
    <StyledMovieItem>
      <ContextMenu
        editModalHandler={openEditModal}
        deleteModalHandler={openDeleteModal}
      />
      <div>
        <img src={process.env.PUBLIC_URL + getMovieSrc(url)} alt={title} />
      </div>
      <StyledFlex>
        <StyledMovieTitle>{title}</StyledMovieTitle>
        <StyledMovieYear>{releaseDate.split("-")[0]}</StyledMovieYear>
      </StyledFlex>
      <div>{genre.map((item) => item.label).join(", ")}</div>
    </StyledMovieItem>
  );
};

export default MovieItem;
