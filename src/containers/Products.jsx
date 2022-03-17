import React from "react";

// components
import Product from "../components/Product.jsx";

// styles
import "../styles/Products.scss";

const products = new Array(15).fill({
  imgUrl:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  price: 120.00,
  name: "bike"
});

const Products = () => {
  return (
    <section class="main-container">
      <div class="cards-container">
        {
          products.map( ({ imgUrl, price, name }) => (
            <Product imgUrl={imgUrl} price={price} name={name} />
          ))
        }
      </div>
    </section>
  );
};

export default Products;
