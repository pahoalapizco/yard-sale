import React from "react";

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
        origin !== "order" && <img src="./icons/icon_close.png" alt="close" />
      }
      
    </div>
  );
};

export default ShopingCart;
