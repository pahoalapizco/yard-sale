import React from "react";

// components
import Header from "../components/Header.jsx";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
