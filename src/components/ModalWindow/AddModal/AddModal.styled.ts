import styled from "styled-components";

import { smallWeight, xxxLarge } from "styles/global_varables";

export const TitleModal = styled.h2`
  text-transform: uppercase;
  font-weight: ${smallWeight};
  font-size: ${xxxLarge};
`;

export const Left = styled.div`
  width: 525px;
`;
export const Right = styled.div`
  width: 300px;
`;

export const StyledFlexForButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 30px;
`;

export const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  gap: 30px;
`;
