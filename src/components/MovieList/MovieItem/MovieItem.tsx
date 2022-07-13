import React from "react";

import {
  StyledMovieItem,
  StyledMovieTitle,
  StyledMovieYear,
  StyledFlex,
} from "./MovieItem.styled";
import ContextMenu from "../../ContextMenu/ContextMenu";
import { Movie } from "../../../models/movie";

interface MovieProps {
  movie: Movie;
  modalOpenHandler: (mode?: string, state?: any) => void;
}

const MovieItem: React.FC<MovieProps> = ({ movie, modalOpenHandler }) => {
  const { name, urlName, genre, releaseDate } = movie;

  const openEditModal = () => {
    modalOpenHandler('edit', movie);
  }

  const openDeleteModal = () => {
    modalOpenHandler('delete', movie);
  }

  const getMovieSrc = (name: string): string => {
    return `/images/${name}.png`;
  };

  return (
    <StyledMovieItem>
      <ContextMenu editModalHandler={openEditModal}  deleteModalHandler={openDeleteModal} />
      <div>
        <img src={process.env.PUBLIC_URL + getMovieSrc(urlName)} alt={name} />
      </div>
      <StyledFlex>
        <StyledMovieTitle>{name}</StyledMovieTitle>
        <StyledMovieYear>{releaseDate.split('-')[0]}</StyledMovieYear>
      </StyledFlex>
      <div>{genre.map((item) => item.label).join(', ')}</div>
    </StyledMovieItem>
  );
};

export default MovieItem;
