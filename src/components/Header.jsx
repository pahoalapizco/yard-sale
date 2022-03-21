import React, { useState } from "react";

// Components
import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";

// assets
import menu from "@icons/icon_menu.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
// Styles
import "@styles/Header.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
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
            <li className="navbar-email" onClick={handleToggle}>
              example@example.com
            </li>
            <li className="navbar-shoping-cart">
              <img src={shoppingCart} alt="cart" />
              <div>2</div>
            </li>
          </ul>
        </div>
        {toggle && <Menu />}
      </nav>
    </>
  );
};

export default Header;
