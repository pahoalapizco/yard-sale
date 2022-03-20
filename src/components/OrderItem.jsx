import React from "react";

// assets
import iconClose from "@icons/icon_close.png";

// styles
import '@styles/Order.scss';

const OrderItem = ({ imgUrl, price, name }) => {
  return (
    <div className="OrderItem">
      <figure>
        <img src={imgUrl} alt={name} />
      </figure>
      <p>{name}</p>
      <p>$ {price} </p>
      <img src={iconClose} alt="close" />
    </div>
  );
};

export default OrderItem;
