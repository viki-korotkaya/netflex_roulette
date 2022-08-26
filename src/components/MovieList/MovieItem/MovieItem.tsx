import React from "react";
import { useRouter } from "next/router";
import {
  StyledFlex,
  StyledMovieItem,
  StyledMovieTitle,
  StyledMovieYear,
} from "components/MovieList/MovieItem/MovieItem.styled";
import ContextMenu from "components/ContextMenu/ContextMenu";
import { Mode, Movie } from "models/movie";
import { useAppDispatch } from "hooks/hooks";
import { modalWindowAction } from "features/modalWindow/modalWindowSelector";

interface MovieProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieProps> = ({ movie }) => {
  const router = useRouter();
  const { title, movieUrl, tagline, releaseDate, id } = movie;
  const dispatch = useAppDispatch();

  const openEditModal = () => {
    dispatch(
      modalWindowAction.openModal({ mode: Mode.Edit, editedMovie: movie })
    );
  };

  const openDeleteModal = () => {
    dispatch(
      modalWindowAction.openModal({ mode: Mode.Delete, editedMovie: movie })
    );
  };

  const getMovie = () => {
    router.replace({
      query: {
        ...router.query,
        movie: id.toString(),
      },
    });
  };

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
        <StyledMovieTitle data-cy="titleMovie">{title}</StyledMovieTitle>
        <StyledMovieYear>{releaseDate.split("-")[0]}</StyledMovieYear>
      </StyledFlex>
      <div>{tagline}</div>
    </StyledMovieItem>
  );
};

export default MovieItem;
