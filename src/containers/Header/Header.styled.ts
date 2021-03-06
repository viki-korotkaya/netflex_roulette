import styled from "styled-components";
import BackgroundImage from "assets/images/Header.png";
import {
  headerHeight,
  mainWidth,
  paddingX,
  paddingY,
} from "styles/global_varables";

export const StyledHeader = styled.section`
  background-image: url(${BackgroundImage});
  background-size: cover;
  max-width: ${mainWidth};
  margin: 0 auto;
  background-repeat: no-repeat;
  height: ${headerHeight};
  padding: ${paddingY} ${paddingX};
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`;
