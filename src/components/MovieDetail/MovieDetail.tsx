import React from "react";

// @ts-ignore
import {
  StyledWrapper,
  StyledFlex,
  AStyled,
  ImgContainer,
  DetailContainer,
  RatingStyled,
  StyledMovieDetails,
  DivForGenre,
  YearAndTimeContainer,
  StyledTitleContainer,
  Overview,
} from "components/MovieDetail/MovieDetail.styled";
import Logo from "components/Logo/Logo";
import SearchButton from "assets/images/search_button.svg";
import { useAppSelector, useAppDispatch } from "hooks/hooks";
import { moviesAction } from "features/movies/moviesSelector";
import { Link } from "react-router-dom";

const MovieDetail: React.FC = () => {
  const selectedMovie = useAppSelector((state) => state.movies.selectedMovie);
  const dispatch = useAppDispatch();

  const getRuntimeFormat = (runtime?: number) => {
    if (!runtime) return "";
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  const goBackToSearch = () => dispatch(moviesAction.resetSelectedMovie());

  // if (!selectedMovie) return null;

  return (
    <StyledWrapper>
      <StyledFlex>
        <Logo />
        <Link to="/search">
          <img src={SearchButton} alt="Go back to search field" />
        </Link>
      </StyledFlex>
      <StyledMovieDetails>
        bla bla bla
        {/*<ImgContainer>*/}
        {/*  <img*/}
        {/*    src={selectedMovie.movieUrl}*/}
        {/*    alt={selectedMovie.title}*/}
        {/*  />*/}
        {/*</ImgContainer>*/}
        {/*<DetailContainer>*/}
        {/*  <StyledTitleContainer>*/}
        {/*    <h2>{selectedMovie.title}</h2>*/}
        {/*    <RatingStyled>{selectedMovie.rating}</RatingStyled>*/}
        {/*  </StyledTitleContainer>*/}
        {/*  <DivForGenre>*/}
        {/*    {selectedMovie.genres.join(", ")}*/}
        {/*  </DivForGenre>*/}
        {/*  <YearAndTimeContainer>*/}
        {/*    <div>{selectedMovie.releaseDate.split("-")[0]}</div>*/}
        {/*    <div>{getRuntimeFormat(selectedMovie.runtime)}</div>*/}
        {/*  </YearAndTimeContainer>*/}
        {/*  <Overview>{selectedMovie.overview}</Overview>*/}
        {/*</DetailContainer>*/}
      </StyledMovieDetails>
    </StyledWrapper>
  );
};

export default MovieDetail;
