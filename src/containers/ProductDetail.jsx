import React from 'react'

// Components
import ProductInfo from '@components/ProductInfo.jsx';

// assets
import iconClose  from "@icons/icon_close.png";

// Styles
import '@styles/ProductDetail.scss';

const ProductDetail = () => {
  return (
    <aside class="ProductDetail">
      <div class="ProductDetail-close">
        <img src={iconClose} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  )
}

export default ProductDetail