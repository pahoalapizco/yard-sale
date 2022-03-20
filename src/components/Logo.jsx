import React from "react";

const Logo = ({ classname = "logo" }) => {
  return (
    <>
      <img
        src="../assets/logos/logo_yard_sale.svg"
        alt="logo"
        className={classname}
      />
    </>
  );
};

export default Logo;
