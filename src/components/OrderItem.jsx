import React from "react";

// styles
import '../styles/Order.scss';

const OrderItem = ({ imgUrl, price, name }) => {
  return (
    <div className="OrderItem">
      <figure>
        <img src={imgUrl} alt={name} />
      </figure>
      <p>{name}</p>
      <p>$ {price} </p>
      <img src="../assets/icons/icon_close.png" alt="close" />
    </div>
  );
};

export default OrderItem;
