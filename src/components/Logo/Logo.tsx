import React from "react";

import LogoImage from "assets/images/logo.svg";

const Logo: React.FC = () => {
  return (
    <div>
      <img src={LogoImage} alt="Logo" />
    </div>
  );
};

export default Logo;
