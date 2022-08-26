import styled from "styled-components";

import {
  backgroundGrey,
  baseWeight,
  largeWeight,
  mainFontColor,
  medium,
  red,
  xlarge,
} from "styles/global_varables";

export const FormFieldStyled = styled.input`
  width: 100%;
  height: 56.5px;
  padding: 0 17px;
  background: ${backgroundGrey};
  border: 0;
  outline: 0;
  color: ${mainFontColor};
  font-weight: ${baseWeight};
  font-size: ${xlarge};
  &::-webkit-calendar-picker-indicator {
    background-image: url("/images/calendar.svg");
  }
`;

export const Label = styled.label`
  display: block;
  color: ${red};
  text-transform: uppercase;
  font-weight: ${largeWeight};
  font-size: ${medium};
  margin-bottom: 13px;
`;
