import styled from "styled-components";
import { Field } from "formik";
import {
  backgroundGrey,
  baseWeight,
  largeWeight,
  mainFontColor,
  medium,
  red,
  smallWeight,
  xlarge,
  xxxLarge,
} from "styles/global_varables";
import Calendar from "assets/images/calendar.svg";

export const TitleModal = styled.h2`
  text-transform: uppercase;
  font-weight: ${smallWeight};
  font-size: ${xxxLarge};
`;

export const Label = styled.label`
  display: block;
  color: ${red};
  text-transform: uppercase;
  font-weight: ${largeWeight};
  font-size: ${medium};
  margin-bottom: 13px;
`;

export const InputLeft = styled(Field)`
  width: 525px;
  background: ${backgroundGrey};
  border: 0;
  outline: 0;
  color: ${mainFontColor};
  font-weight: ${baseWeight};
  font-size: ${xlarge};
  padding: 17px;
`;

export const InputRight = styled(Field)`
  width: 300px;
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

export const InputDate = styled(InputRight)`
  height: 56.5px
`;

export const TextArea = styled(Field)`
  width: 100%;
  background: ${backgroundGrey};
  border: 0;
  outline: 0;
  color: ${mainFontColor};
  font-weight: ${baseWeight};
  font-size: ${xlarge};
  margin-bottom: 30px;
  padding: 17px;
`;

export const StyledFlexForButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

export const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  gap: 30px;
`;
