import React from 'react'

const NotFound = () => {
  return (
    <div class="login">
      <div class="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo" />

        <h1 class="title">Sorry</h1>
        <p class="subtitle">Page not found :(</p>
    
        <div class="email-image">
            <img src="../assets/img/404.png" alt="404 - Not Found" />
        </div>

        <button class="primary-button login-button">Go Home</button>
    </div>
    </div>
  );
}

export default NotFound;