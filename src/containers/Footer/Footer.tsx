import React from "react";

import { StyledFooter } from "./Footer.styled";
import Logo from "../../components/Logo/Logo";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div>
        <Logo />
      </div>
    </StyledFooter>
  );
};

export default Footer;