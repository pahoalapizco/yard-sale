import React from "react";

// assets
import flechita from "@icons/flechita.svg";

// Styles
import '@styles/Order.scss';

const Order = ({ date, articles, total }) => {
  return (
    <div className="Order Order_group">
      <p>
        <span> {date}</span>
        <span> {articles} articles</span>
      </p>
      <p>$ {total}</p>
      <img src={flechita} alt="arrow" />
    </div>
  );
};

export default Order;
