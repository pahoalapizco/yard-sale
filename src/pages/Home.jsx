import React from "react";

// components
import Header from "../components/Header.jsx";

// Containers
import ProductList from "../containers/ProductList.jsx";
const Home = () => {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
};

export default Home;
