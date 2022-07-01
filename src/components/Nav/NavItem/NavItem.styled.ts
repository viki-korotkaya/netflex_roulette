import styled from "styled-components";

import { dividerHeight, medium, red } from "../../../styles/global_varables";

interface LiProps {
  index: number;
}

export const StyledLi = styled.li<LiProps>`
  display: inline;
  text-transform: uppercase;
  font-size: ${medium};
  cursor: pointer;
  margin-left: ${({ index }) => {
    return index === 0 ? 0 : "30px";
  }};
`;

export const StyledA = styled.a`
  text-decoration: none;
  color: inherit;
  display: inline-block;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    height: ${dividerHeight};
    background-color: ${red};
    opacity: 0;
    transition: opacity 200ms, transform 200ms;
  }
  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }
`;
