import styled from "styled-components";
import {
  baseWeight,
  mainFontColor,
  smallWeight,
  xlarge,
  xxxLarge,
} from "styles/global_varables";

export const DeleteModal = styled.div`
  color: ${mainFontColor};
`;

export const TitleModal = styled.h2`
  text-transform: uppercase;
  font-weight: ${smallWeight};
  font-size: ${xxxLarge};
  margin: 0;
`;

export const BodyModal = styled.div`
  margin: 35px 0 52px;
  font-size: ${xlarge};
  font-weight: ${baseWeight};
`;

export const StyledFlex = styled.div`
  display: flex;
  justify-content: flex-end;
`;
