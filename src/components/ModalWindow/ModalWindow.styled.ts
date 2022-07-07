import styled from "styled-components";
import {
    backgroundMain,
    darkTransparent,
    mainFontColor,
    mediumWeight,
    smallWeight,
    xxLarge,
    red, largeWeight, medium, backgroundGrey, xlarge, baseWeight, marginArrowLeft, borderSideTriangle, borderTopTriangle
} from "../../styles/global_varables";
import Calendar from "../../assets/images/calendar.svg";

export const StyledModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${darkTransparent};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: ${backgroundMain};
  padding: 20px 60px 60px 60px;
  //width: 976px;
`;

export const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseBtn = styled.span`
  margin-left: auto;
  font-size: 30px;
  font-weight: ${mediumWeight};
  color: ${mainFontColor};
  cursor: pointer;
`;

// export const Form = styled.form`
//
// `;
//
// export const Label = styled.label`
//   display: block;
//   color: ${red};
//   text-transform: uppercase;
//   font-weight: ${largeWeight};
//   font-size: ${medium};
//   margin-bottom: 13px;
// `;
//
// export const InputLeft = styled.input`
//   width: 525px;
//   background: ${backgroundGrey};
//   border: 0;
//   outline: 0;
//   color: ${mainFontColor};
//   font-weight: ${baseWeight};
//   font-size: ${xlarge};
//   padding: 17px;
// `;
//
// export const InputRight = styled.input`
//   width: 300px;
//   background: ${backgroundGrey};
//   border: 0;
//   outline: 0;
//   color: ${mainFontColor};
//   font-weight: ${baseWeight};
//   font-size: ${xlarge};
//   padding: 17px;
//   &::-webkit-calendar-picker-indicator {
//     background-image: url(${Calendar});
//   }
// `;
//
// export const InputDate = styled(InputRight)`
//
//     background: url(${Calendar})  no-repeat center right 15px, ${backgroundGrey};
//
// `;
//
// export const Select = styled.select`
//   width: 525px;
//   background: ${backgroundGrey};
//   border: 0;
//   outline: 0;
//   color: ${mainFontColor};
//   font-weight: ${baseWeight};
//   font-size: ${xlarge};
//   padding: 17px;
//   -moz-appearance:none; /* Firefox */
//   -webkit-appearance:none; /* Safari and Chrome */
//   appearance:none;
//   // border-left: ${borderSideTriangle} solid transparent;
//   // border-right: ${borderSideTriangle} solid transparent;
//   // border-top: ${borderTopTriangle} solid ${red};
//   background-image: linear-gradient(45deg, transparent 50%, ${red} 50%),
//                     linear-gradient(135deg, ${red} 50%, transparent 50%);
//   background-position:
//           calc(100% - 20px) calc(1em + 2px),
//           calc(100% - 15px) calc(1em + 2px),
//           calc(100% - .5em) .5em;
//   background-size:
//           5px 5px,
//           5px 5px,
//           1.5em 1.5em;
//   background-repeat: no-repeat;
// `;
//
// export const TextArea = styled.textarea`
//   width: 100%;
//   background: ${backgroundGrey};
//   border: 0;
//   outline: 0;
//   color: ${mainFontColor};
//   font-weight: ${baseWeight};
//   font-size: ${xlarge};
//   margin-bottom: 30px;
//   padding: 17px;
// `;
//
// export const StyledFlexForButtons = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   gap: 15px;
// `;
//
// export const StyledArrowDown = styled.div`
//   display: inline-block;
//   margin-left: ${marginArrowLeft};
//   width: 0;
//   height: 0;
//   border-left: ${borderSideTriangle} solid transparent;
//   border-right: ${borderSideTriangle} solid transparent;
//   border-top: ${borderTopTriangle} solid ${red};
// `;
