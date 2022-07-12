import styled from "styled-components";
import {
  backgroundGrey,
  backgroundMain, baseWeight, borderSideTriangle, borderTopTriangle,
  darkTransparent,
  largeWeight, mainFontColor, marginArrowLeft,
  medium,
  red, smallWeight, xlarge, xxLarge
} from "../../../styles/global_varables";
import Calendar from "../../../assets/images/calendar.svg";
import {default as ReactSelect} from "react-select";

export const Form = styled.form`

`;

export const TitleModal = styled.h2`
  text-transform: uppercase;
  font-weight: ${smallWeight};
  color: ${xxLarge};
`;

export const Label = styled.label`
  display: block;
  color: ${red};
  text-transform: uppercase;
  font-weight: ${largeWeight};
  font-size: ${medium};
  margin-bottom: 13px;
`;

export const InputLeft = styled.input`
  width: 525px;
  background: ${backgroundGrey};
  border: 0;
  outline: 0;
  color: ${mainFontColor};
  font-weight: ${baseWeight};
  font-size: ${xlarge};
  padding: 17px;
`;

export const InputRight = styled.input`
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
  
    background: url(${Calendar})  no-repeat center right 15px, ${backgroundGrey};
  
`;

export const SelectWrapper = styled.div`
  width: 100%;
`;

export const Select = styled.select`
  width: 525px;
  background: ${backgroundGrey};
  border: 0;
  outline: 0;
  color: ${mainFontColor};
  font-weight: ${baseWeight};
  font-size: ${xlarge};
  padding: 17px;
  -moz-appearance:none; /* Firefox */
  -webkit-appearance:none; /* Safari and Chrome */
  appearance:none;
  background-image: linear-gradient(45deg, transparent 50%, ${red} 50%),
                    linear-gradient(135deg, ${red} 50%, transparent 50%);
  background-position:
          calc(100% - 20px) calc(1em + 2px),
          calc(100% - 15px) calc(1em + 2px),
          calc(100% - .5em) .5em;
  background-size:
          5px 5px,
          5px 5px,
          1.5em 1.5em;
  background-repeat: no-repeat;
`;

export const SelectBox = styled.div`
  position: relative;
`;

export const OverSelect = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const CheckboxesWrapper = styled.div`
  position: relative;
`;

export const CheckBoxes = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background: ${backgroundMain};
  opacity: 0.9;
  & label {
    display: block;
    padding: 9px 18px;
    & > input {
      accent-color: ${red};
      padding-right: 15px;
    }
  }
`;

export const TextArea = styled.textarea`
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
