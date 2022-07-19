import styled from "styled-components";
import {
  mainWidth,
  backgroundMain,
  paddingX,
  paddingY,
  mainFontColor,
  xxxLarge,
  smallWeight,
  xlarge,
  whiteCoconut,
  red,
  xxlarge,
} from "../../styles/global_varables";

export const StyledWrapper = styled.div`
  max-width: ${mainWidth};
  margin: 0 auto;
  background-color: ${backgroundMain};
  padding: ${paddingY} ${paddingX};
  color: ${whiteCoconut};
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
`;

export const StyledMovieDetails = styled(StyledFlex)`
  flex-wrap: nowrap;
  justify-content: flex-start;
  gap: 60px;
`;

export const StyledTitleContainer = styled(StyledMovieDetails)`
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 50px;
  & > h2 {
    font-size: ${xxxLarge};
    font-weight: ${smallWeight};
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    max-width: 500px;
    align-self: center;
    color: ${mainFontColor};
  }
`;

export const AStyled = styled.a`
  cursor: pointer;
`;

export const ImgContainer = styled.div``;

export const DetailContainer = styled.div`
  flex-grow: 1;
`;

export const RatingStyled = styled.div`
  margin-bottom: 5px;
  border: 2px solid ${mainFontColor};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: ${xlarge};
  font-weight: ${smallWeight};
  color: ${mainFontColor};
`;

export const DivForGenre = styled.div`
  margin-bottom: 30px;
`;

export const YearAndTimeContainer = styled(StyledMovieDetails)`
  margin-bottom: 30px;
  color: ${red};
  font-size: ${xxlarge};
  font-weight: ${smallWeight};
`;

export const Overview = styled.div`
  font-size: ${xlarge};
  font-weight: ${smallWeight};
`;
