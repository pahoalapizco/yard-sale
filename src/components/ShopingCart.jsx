import React, { useContext } from "react";

// Context
import AppContext from '@context/AppContext';

// assets
import iconClose from "@icons/icon_close.png";

const ShopingCart = ({ product, indexValue, }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (item) => {
    removeFromCart(item);
  }

  return (
    <div className="shopping-cart">
      <figure>
        <img
          src={product.images[0]}
          alt={product.title}
        />
      </figure>
      <p>{product.title}</p>
      <p>$ {product.price} </p>
      <img src={iconClose} alt="close" className="pointer" onClick={() => handleRemove(indexValue)}/>      
    </div>
  );
};

export default ShopingCart;
