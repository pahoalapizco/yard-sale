import React from "react";

// styles
import '@styles/Menu.scss';

const Menu = () => {
  return (
    <div classNameName="Menu">
      <ul>
        <li>
          <a href="/" className="title">
            My orders
          </a>
        </li>
        <li>
          <a href="/" className="title">
            My acount
          </a>
        </li>
        <li>
          <a href="/" className="title">
            Sing out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
