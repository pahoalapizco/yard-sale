import React, { useContext } from "react";

// Components
import ShopingCart from "@components/ShopingCart.jsx";

// Context
import AppContext from "@context/AppContext";

// assets
import flechita from "@icons/flechita.svg";

// Syles
import "@styles/Orders.scss";

const Cart = () => {
  const {
    state: { cart },
    openCloseCart,
  } = useContext(AppContext);
  const total = cart.reduce((total, prod) => total + prod.price, 0);

  return (
    <aside className="Cart">
      <div className="Orders">
        <div className="Orders-container">
          <div className="title-container pointer" onClick={openCloseCart}>
            <img src={flechita} alt="arrow" />
            <h1 className="title">Shopping cart</h1>
          </div>
          <div className="Orders-content">
            {cart.map((item, index) => (
              <ShopingCart 
                indexValue={index}
                key={`ShopingCartId-${index}`}
                product={item}
              />
            ))}
            <div className="order-cart">
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
