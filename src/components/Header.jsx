import React, { useState, useContext } from "react";

// Components
import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";
import Cart from "../containers/Cart.jsx";
// Context
import AppContext from "@context/AppContext";

// assets
import menu from "@icons/icon_menu.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
// Styles
import "@styles/Header.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);  

  const {
    state: { cart },
    toggleOrders,
    openCloseCart,
  } = useContext(AppContext);
  const totalCart = cart.length;

  const handleToggle = () => {
    setToggle(!toggle);
    setToggleOrders(false);
  };

  const handleToggleOrders = () => {
    openCloseCart();
    setToggle(false);
  };
  return (
    <>
      <nav>
        <img src={menu} alt="Menu" className="menu" />

        <div className="navbar-left">
          <Logo classname="nav-logo" />

          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/"> Clothes</a>
            </li>
            <li>
              <a href="/">Electronicst</a>
            </li>
            <li>
              <a href="/">Furniture</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="navbar-email pointer" onClick={handleToggle}>
              example@example.com
            </li>
            <li className="navbar-shoping-cart pointer" onClick={handleToggleOrders}>
              <img src={shoppingCart} alt="cart" />
              {totalCart > 0 && <div>{totalCart}</div>}
            </li>
          </ul>
        </div>
        {toggle && <Menu />}
        {toggleOrders && <Cart />}
      </nav>
    </>
  );
};

export default Header;
