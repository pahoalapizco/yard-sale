import React from "react";

// assets
import addToCart from "@icons/bt_add_to_cart.svg";

import "@styles/ProductDetail.scss";

const ProductInfo = () => {
  return (
    <>
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Bike"
      />

      <div class="ProductInfo">
        <p>$ 120.00</p>
        <p>Bike</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic obcaecati
          beatae sequi magnam a reprehenderit quasi dicta, nostrum facere
          aliquid et quo doloremque at pariatur blanditiis in doloribus harum
          incidunt!
        </p>

        <button class="primary-button add-to-cart-button">
          <img src={addToCart} alt="cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
