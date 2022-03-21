import React, { useState, useEffect } from "react";
import axios from 'axios';

// components
import ProductItem from "@components/ProductItem.jsx";

// styles
import "@styles/Products.scss";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
    
  }, []);

  return (
    <section className="main-container">
      <div className="cards-container">
        {
          products.map( ({ id, images, price, title }) => (
            <ProductItem key={id} imgUrl={images[0]} price={price} name={title} />
          ))
        }
      </div>
    </section>
  );
};

export default ProductList;
