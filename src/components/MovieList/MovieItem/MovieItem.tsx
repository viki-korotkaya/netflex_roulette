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
}

const MovieItem: React.FC<MovieProps> = ({ movie }) => {
  const { name, urlName, description, releaseDate } = movie;
  const getMovieSrc = (name: string): string => {
    return `/images/${name}.png`;
  };

  return (
    <StyledMovieItem>
      <ContextMenu />
      <div>
        <img src={process.env.PUBLIC_URL + getMovieSrc(urlName)} alt={name} />
      </div>
      <StyledFlex>
        <StyledMovieTitle>{name}</StyledMovieTitle>
        <StyledMovieYear>{releaseDate}</StyledMovieYear>
      </StyledFlex>
      <div>{description}</div>
    </StyledMovieItem>
  );
};

export default MovieItem;
