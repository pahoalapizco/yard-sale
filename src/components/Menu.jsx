import React from "react";

// styles
import '@styles/Menu.scss';

const Menu = () => {
  return (
    <div class="Menu">
      <ul>
        <li>
          <a href="/" class="title">
            My orders
          </a>
        </li>
        <li>
          <a href="/" class="title">
            My acount
          </a>
        </li>
        <li>
          <a href="/" class="title">
            Sing out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
