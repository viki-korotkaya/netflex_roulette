import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div>
      <Image src="/images/logo.svg" alt="Logo" width="150" height="18" />
    </div>
  );
};

export default Logo;
