import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  StyledFlex,
  StyledMovieItem,
  StyledMovieTitle,
  StyledMovieYear,
} from "components/MovieList/MovieItem/MovieItem.styled";
import ContextMenu from "components/ContextMenu/ContextMenu";
import { Mode, Movie } from "models/movie";
import { useAppDispatch } from "hooks/hooks";
import { fetchMovie } from "features/movies/moviesSelector";
import { modalWindowAction } from "features/modalWindow/modalWindowSelector";

interface MovieProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieProps> = ({ movie }) => {
  const [searchParams, setSearchParams] = useSearchParams();
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
    searchParams.set("movie", movie.id.toString());
    setSearchParams(searchParams);
    // dispatch(fetchMovie(id));
  };

  return (
    <StyledMovieItem onClick={getMovie}>
      {/*<Link >*/}
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
      {/*</Link>*/}
    </StyledMovieItem>
  );
};

export default MovieItem;
