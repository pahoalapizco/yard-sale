import React from "react";

const Order = ({ date, articles, total }) => {
  return (
    <div class="order order_group">
      <p>
        <span> {date}</span>
        <span> {articles} articles</span>
      </p>
      <p>$ {total}</p>
      <img src="./icons/flechita.svg" alt="arrow" />
    </div>
  );
};

export default Order;
