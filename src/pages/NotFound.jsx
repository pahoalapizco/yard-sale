import React from 'react'

// Components
import Logo from "@components/Logo.jsx";

// assets
import notFound from "@images/404.png"

// styles
import "@styles/styles.scss";

const NotFound = () => {
  return (
    <div className="login">
      <div className="form-container">
        <Logo />

        <h1 className="title">Sorry</h1>
        <p className="subtitle">Page not found :(</p>
    
        <div className="email-image">
            <img src={notFound} alt="404 - Not Found" />
        </div>

        <button className="primary-button login-button">Go Home</button>
    </div>
    </div>
  );
}

export default NotFound;