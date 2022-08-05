import styled from "styled-components";

import {
  backgroundGrey,
  baseWeight,
  largeWeight,
  mainFontColor, medium,
  red,
  small,
  smallWeight,
  xlarge
} from "../../styles/global_varables";
import Calendar from "assets/images/calendar.svg";

export const FormFieldStyled = styled.input`
  width: 100%;
  background: ${backgroundGrey};
  border: 0;
  outline: 0;
  color: ${mainFontColor};
  font-weight: ${baseWeight};
  font-size: ${xlarge};
  padding: 17px;
  &::-webkit-calendar-picker-indicator {
    background-image: url(${Calendar});
  }
`;

export const ErrorSpan = styled.span`
  display: block;
  color: ${red};
  font-size: ${small};
  font-weight: ${smallWeight};
`;

export const Label = styled.label`
  display: block;
  color: ${red};
  text-transform: uppercase;
  font-weight: ${largeWeight};
  font-size: ${medium};
  margin-bottom: 13px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  background: ${backgroundGrey};
  border: 0;
  outline: 0;
  color: ${mainFontColor};
  font-weight: ${baseWeight};
  font-size: ${xlarge};
  padding: 17px;
`;
