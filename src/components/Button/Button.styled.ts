import styled from "styled-components";
import {
  backgroundHeaderButton,
  buttonHeight,
  buttonTransparentHeight,
  buttonTransparentWidth,
  buttonWidth,
  xlarge,
  mainFontColor,
  mediumWeight,
  radius,
  red,
} from "styles/global_varables";

export const StyledButton = styled.button`
  width: ${buttonWidth};
  height: ${buttonHeight};
  color: ${mainFontColor};
  border-radius: ${radius};
  text-transform: uppercase;
  border: none;
  font-family: inherit;
  font-size: ${xlarge};
  font-weight: ${mediumWeight};
  cursor: pointer;
`;

export const PrimaryButton = styled(StyledButton)`
  background: ${red};
`;

export const SecondaryButton = styled(StyledButton)`
  background: none;
  color: ${red};
  border: 1px solid ${red};
`;

export const TransparentButton = styled(StyledButton)`
  background: ${backgroundHeaderButton};
  color: ${red};
  height: ${buttonTransparentHeight};
  width: ${buttonTransparentWidth};
`;
