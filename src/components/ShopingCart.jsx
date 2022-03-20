import React from "react";

// assets
import iconClose from "@icons/icon_close.png";

const ShopingCart = ({ imgUrl, price, name, origin = "order" }) => {
  return (
    <div className="shopping-cart">
      <figure>
        <img
          src={imgUrl}
          alt={name}
        />
      </figure>
      <p>{name}</p>
      <p>$ {price} </p>
      {
        origin !== "order" && <img src={iconClose} />
      }
      
    </div>
  );
};

export default ShopingCart;
