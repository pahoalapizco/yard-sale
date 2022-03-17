import React from "react";

// Components
import Order from "../components/Order.jsx";

// styles
import '../styles/MyOrder.scss';

const products = new Array(15).fill({
  articles: 6,
  total: 120.0,
  date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
});

const MyOrders = () => {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="title_left">My Orders</h1>
        <div className="my-order-content">
          {products.map(({ articles, total, date }) => (
            <Order articles={articles} total={total} date={date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
