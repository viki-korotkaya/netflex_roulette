import React from "react";
import {
  StyledWrapper,
  StyledFlex,
  ImgContainer,
  DetailContainer,
  RatingStyled,
  StyledMovieDetails,
  DivForGenre,
  YearAndTimeContainer,
  StyledTitleContainer,
  Overview,
  AStyled,
} from "components/MovieDetail/MovieDetail.styled";
import Logo from "components/Logo/Logo";
import SearchButton from "assets/images/search_button.svg";
import { useAppSelector } from "hooks/hooks";
import { useSearchParams } from "react-router-dom";

const MovieDetail: React.FC = () => {
  const selectedMovie = useAppSelector((state) => state.movies.selectedMovie);
  const [searchParams, setSearchParams] = useSearchParams();

  const getRuntimeFormat = (runtime?: number) => {
    if (!runtime) return "";
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  const goBackToSearch = () => {
    searchParams.delete("movie");
    setSearchParams(searchParams);
  };

  if (!selectedMovie) return null;

  return (
    <StyledWrapper id="selectedMovie">
      <StyledFlex>
        <Logo />
        <AStyled onClick={goBackToSearch}>
          <img src={SearchButton} alt="Go back to search field" />
        </AStyled>
      </StyledFlex>
      <StyledMovieDetails>
        <ImgContainer>
          <img src={selectedMovie.movieUrl} alt={selectedMovie.title} />
        </ImgContainer>
        <DetailContainer>
          <StyledTitleContainer>
            <h2>{selectedMovie.title}</h2>
            <RatingStyled>{selectedMovie.rating}</RatingStyled>
          </StyledTitleContainer>
          <DivForGenre>{selectedMovie.genres.join(", ")}</DivForGenre>
          <YearAndTimeContainer>
            <div>{selectedMovie.releaseDate.split("-")[0]}</div>
            <div>{getRuntimeFormat(selectedMovie.runtime)}</div>
          </YearAndTimeContainer>
          <Overview>{selectedMovie.overview}</Overview>
        </DetailContainer>
      </StyledMovieDetails>
    </StyledWrapper>
  );
};

export default MovieDetail;
