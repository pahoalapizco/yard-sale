import React from "react";

// Components
import Logo from "./Logo.jsx";

// Styles
import "../styles/Header.scss";

const Header = () => {
  return (
    <nav>
      <img src="../assets/icons/icon_menu.svg" alt="Menu" className="menu" />

      <div className="navbar-left">
        <Logo />

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
          <li className="navbar-email">example@example.com</li>
          <li className="navbar-shoping-cart">
            <img src="../assets/icons/icon_shopping_cart.svg" alt="cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
