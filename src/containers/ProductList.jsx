import React from "react";

// hooks
import useGetProducts from "@hooks/useGetProducts";

// components
import ProductItem from "@components/ProductItem.jsx";

// styles
import "@styles/Products.scss";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
