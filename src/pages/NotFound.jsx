import React from 'react'

const NotFound = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="../assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />

        <h1 className="title">Sorry</h1>
        <p className="subtitle">Page not found :(</p>
    
        <div className="email-image">
            <img src="../assets/img/404.png" alt="404 - Not Found" />
        </div>

        <button className="primary-button login-button">Go Home</button>
    </div>
    </div>
  );
}

export default NotFound;