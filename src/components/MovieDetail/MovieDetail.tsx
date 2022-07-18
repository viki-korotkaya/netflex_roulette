import React, {useContext} from "react";

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
} from "./MovieDetail.styled";
import {AppContext} from "../../Context";
import Logo from "../Logo/Logo";
import SearchButton from "../../assets/images/search_button.svg"


const MovieDetail: React.FC = () => {
  const {selectedMovie, setSelectedMovie} = useContext(AppContext);
  const getMovieSrc = (url: string | undefined): string => {
    return `/images/${url}.png`;
  };

  const getRuntimeFormat = (runtime?: number) => {
    if (!runtime) return '';
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`
  }

  return (
    <StyledWrapper>
      <StyledFlex>
        <Logo />
        <AStyled onClick={() => setSelectedMovie(null)}>
          <img src={SearchButton} alt="Go back to search field"/>
        </AStyled>
      </StyledFlex>
      <StyledMovieDetails>
        <ImgContainer>
          <img src={process.env.PUBLIC_URL + getMovieSrc(selectedMovie?.url)} alt={selectedMovie?.title} />
        </ImgContainer>
        <DetailContainer>
          <StyledTitleContainer>
            <h2>{selectedMovie?.title}</h2>
            <RatingStyled>{selectedMovie?.rating}</RatingStyled>
          </StyledTitleContainer>
          <DivForGenre>{selectedMovie?.genre.map((item) => item.label).join(", ")}</DivForGenre>
          <YearAndTimeContainer>
            <div>{selectedMovie?.releaseDate.split("-")[0]}</div>
            <div>{getRuntimeFormat(selectedMovie?.runtime)}</div>
          </YearAndTimeContainer>
          <Overview>{selectedMovie?.overview}</Overview>
        </DetailContainer>
      </StyledMovieDetails>
    </StyledWrapper>
  );
};

export default MovieDetail;
