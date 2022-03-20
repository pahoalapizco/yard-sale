import React from "react";

// Components
import Order from "@components/Order.jsx";

// styles
import '@styles/Order.scss';

const products = new Array(15).fill({
  articles: 6,
  total: 120.0,
  date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
});

const Orders = () => {
  return (
    <div className="Orders">
      <div className="Orders-container">
        <h1 className="title title_left">My Orders</h1>
        <div className="Orders-content">
          {products.map(({ articles, total, date }) => (
            <Order articles={articles} total={total} date={date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
