import React from "react";

// Components
import OrderItem from "@components/OrderItem.jsx";

// styles
import "@styles/MyOrder.scss";

const products = new Array(15).fill({
  imgUrl:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  price: 120.0,
  name: "bike",
});
const article = products.length;
const total = products.reduce((total, prod) => total + prod.price, 0);
const today = new Date();

const MyOrder = () => {
  return (
    <div className="MyOrder">
      <div className="MyOrder-container">
        <h1 className="title title_left">My Order</h1>
        <div className="MyOrder-content">
          <div className="order">
            <p>
              <span>
                {" "}
                {today.getDate()}/{today.getMonth()}/{today.getFullYear()}{" "}
              </span>
              <span> {article} articles</span>
            </p>
            <p>$ {total}</p>
          </div>
          {products.map(({ imgUrl, price, name }) => (
            <OrderItem imgUrl={imgUrl} price={price} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
