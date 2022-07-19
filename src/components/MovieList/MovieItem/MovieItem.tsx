import React from "react";

import {
  StyledFlex,
  StyledMovieItem,
  StyledMovieTitle,
  StyledMovieYear,
} from "./MovieItem.styled";
import ContextMenu from "../../ContextMenu/ContextMenu";
import { Mode, Movie } from "../../../models/movie";
import { useAppContext } from "../../../hooks/useAppContext";

interface MovieProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieProps> = ({ movie }) => {
  const { title, url, genre, releaseDate } = movie;
  const { setSelectedMovie, openModalHandler } = useAppContext();

  const openEditModal = () => {
    openModalHandler(Mode.Edit, movie);
  };

  const openDeleteModal = () => {
    openModalHandler(Mode.Delete, movie);
  };

  const getMovieSrc = (url: string): string => {
    return `/images/${url}.png`;
  };

  return (
    <StyledMovieItem
      onClick={() => {
        setSelectedMovie(movie);
      }}
    >
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
