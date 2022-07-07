import React, {useState} from "react";

import {
  StyledMovieItem,
  StyledMovieTitle,
  StyledMovieYear,
  StyledFlex,
} from "./MovieItem.styled";
import ContextMenu from "../../ContextMenu/ContextMenu";
import { Movie } from "../../../models/movie";
import ModalWindow from "../../ModalWindow/ModalWindow";

interface MovieProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieProps> = ({ movie }) => {
  const { name, urlName, description, releaseDate } = movie;
  const [openEditModal, setEditModal] = useState(false);
  const [openDeleteModal, setDeleteModal] = useState(false);

  const editModalHandler = () => {
    setEditModal(!openEditModal);
  };

  const deleteModalHandler = () => {
    setDeleteModal(!openDeleteModal);
  };

  const getMovieSrc = (name: string): string => {
    return `/images/${name}.png`;
  };

  return (
    <StyledMovieItem>
      <ContextMenu editModalHandler={editModalHandler}  deleteModalHandler={deleteModalHandler} />
      <div>
        <img src={process.env.PUBLIC_URL + getMovieSrc(urlName)} alt={name} />
      </div>
      <StyledFlex>
        <StyledMovieTitle>{name}</StyledMovieTitle>
        <StyledMovieYear>{releaseDate}</StyledMovieYear>
      </StyledFlex>
      <div>{description}</div>
      {openEditModal && <ModalWindow closeHandler={editModalHandler} initialState={movie} mode="edit" />}
      {openDeleteModal && <ModalWindow closeHandler={deleteModalHandler} initialState={movie} mode="delete" />}
    </StyledMovieItem>
  );
};

export default MovieItem;
