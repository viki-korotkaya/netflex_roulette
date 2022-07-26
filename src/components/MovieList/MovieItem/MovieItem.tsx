import React from "react";

import {
  StyledFlex,
  StyledMovieItem,
  StyledMovieTitle,
  StyledMovieYear,
} from "./MovieItem.styled";
import ContextMenu from "../../ContextMenu/ContextMenu";
import { Mode, Movie } from "../../../models/movie";
import { useAppContext } from "../../../hooks/hooks";

interface MovieProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieProps> = ({ movie }) => {
  const { title, poster_path, tagline, release_date } = movie;
  const { setSelectedMovie, openModalHandler } = useAppContext();

  const openEditModal = () => {
    openModalHandler(Mode.Edit, movie);
  };

  const openDeleteModal = () => {
    openModalHandler(Mode.Delete, movie);
  };

  // const getMovieSrc = (url: string): string => {
  //   return `/images/${url}.png`;
  // };

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
        <img src={poster_path} alt={title} />
      </div>
      <StyledFlex>
        <StyledMovieTitle>{title}</StyledMovieTitle>
        <StyledMovieYear>{release_date.split("-")[0]}</StyledMovieYear>
      </StyledFlex>
      <div>{tagline}</div>
    </StyledMovieItem>
  );
};

export default MovieItem;
