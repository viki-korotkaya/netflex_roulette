import styled from "styled-components";
import {
  border,
  large,
  margin22,
  margin50,
  margin8,
  medium,
  mediumWeight,
  padding4,
  padding8,
  radius,
  whiteCoconut,
} from "styles/global_varables";
import { StyledContextMenu } from "components/ContextMenu/ContextMenu.styled";

export const StyledMovieItem = styled.div`
  margin-bottom: ${margin50};
  color: ${whiteCoconut};
  position: relative;
  cursor: pointer;
  & ${StyledContextMenu} {
    opacity: 0;
  }
  &:hover ${StyledContextMenu} {
    opacity: 1;
  }
`;

export const StyledMovieTitle = styled.div`
  font-weight: ${mediumWeight};
  font-size: ${large};
  line-height: 22px;
`;

export const StyledMovieYear = styled.div`
  font-weight: ${mediumWeight};
  font-size: ${medium};
  line-height: 17px;
  border: ${border} solid ${whiteCoconut};
  border-radius: ${radius};
  padding: ${padding4} ${padding8};
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin: ${margin22} 0 ${margin8};
`;
