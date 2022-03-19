import React from 'react'

// Components
import ProductInfo from '../components/ProductInfo.jsx';

// Styles
import '../styles/ProductDetail.scss';

const ProductDetail = () => {
  return (
    <aside class="ProductDetail">
      <div class="ProductDetail-close">
        <img src="../assets/icons/icon_close.png" alt="" />
      </div>
      <ProductInfo />
    </aside>
  )
}

export default ProductDetail