import React from "react";

// Components
import Logo from "@components/Logo.jsx";

// assets
import email from "@icons/email.svg";

// Styles
// import "@styles/styles.scss";
import "@styles/SendEmail.scss";

const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="SendEmail-container">
        <Logo />

        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>

        <div className="email-image">
          <img src={email} alt="email" />
        </div>

        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn't recevice the email? </span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
