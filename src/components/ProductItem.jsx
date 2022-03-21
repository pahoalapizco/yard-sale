import React from "react";

// assets
import addToCart from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ imgUrl, price, name }) => {
  return (
    <div className="product-card">
      <img
        src={imgUrl[0]}
        alt={name}
      />
      <div className="producto-info">
        <div>
          <p>$ {price}</p>
          <p>{name}</p>
        </div>
        <figure>
          <img src={addToCart} alt="Add to cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
