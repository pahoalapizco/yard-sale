import React from "react";

const ProductItem = ({ imgUrl, price, name }) => {
  return (
    <div class="product-card">
      <img
        src={imgUrl}
        alt={name}
      />
      <div class="producto-info">
        <div>
          <p>$ {price}</p>
          <p>{name}</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="Add to cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
