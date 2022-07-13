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
  openModal: boolean;
  modalOpenHandler: (mode?: string, state?: any) => void;
}

const MovieItem: React.FC<MovieProps> = ({ movie, modalOpenHandler, openModal }) => {
  const { name, urlName, genre, releaseDate } = movie;
  // const [openEditModal, setEditModal] = useState(false);
  // const [openDeleteModal, setDeleteModal] = useState(false);

  // const editModalHandler = () => {
  //   setEditModal(!openEditModal);
  // };

  // const deleteModalHandler = () => {
  //   setDeleteModal(!openDeleteModal);
  // };

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
      {/*<ContextMenu editModalHandler={editModalHandler}  deleteModalHandler={deleteModalHandler} />*/}
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
