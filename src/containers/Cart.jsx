import React from "react";

// Components
import ShopingCart from "../components/ShopingCart.jsx";

// Syles
import "../styles/Orders.scss";

const products = new Array(3).fill({
  imgUrl:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  price: 120.0,
  name: "bike",
});
const total = products.reduce((total, prod) => total + prod.price, 0);

const Cart = () => {
  return (
    <aside className="product-detail">
      <div className="my-order">
        <div className="my-order-container">
          <div className="title-container">
            <img src="../assets/icons/flechita.svg" alt="arrow" />
            <h1 className="title">Shopping cart</h1>
          </div>
          <div className="my-order-content">
            {products.map(({ imgUrl, price, name }) => (
              <ShopingCart imgUrl={imgUrl} price={price} name={name} origin="cart"/>
            ))}
            <div className="order order-cart">
              <p>
                <span> Total </span>
              </p>
              <p>$ {total} </p>
            </div>

            <button className="primary-button">Checkout</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Cart;
