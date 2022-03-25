import React, { useContext } from "react";

// context
import AppContext from "@context/AppContext";

// assets
import addToCartIcon from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleCick = (item) => {
    addToCart(item);
  };

  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} />
      <div className="producto-info">
        <div>
          <p>$ {product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure>
          <img src={addToCartIcon} alt="Add to cart" className="pointer" onClick={() => handleCick(product)} />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
