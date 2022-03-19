import React from "react";

import '../styles/Order.scss';

const Order = ({ date, articles, total }) => {
  return (
    <div class="Order Order_group">
      <p>
        <span> {date}</span>
        <span> {articles} articles</span>
      </p>
      <p>$ {total}</p>
      <img src="../assets/icons/flechita.svg" alt="arrow" />
    </div>
  );
};

export default Order;
