import React from "react";

//Components
import Logo from '../components/Logo.jsx';

// styles
import "../styles/NewPassword.scss";

const NewPassword = () => {
  return (
    <div className="NewPassword">
      <div className="NewPassword-container">
        <Logo />

        <h1 className="NewPassword-title">Create a new password</h1>
        <p className="NewPassword-subtitle">Enter a new password for your account</p>

        <form action="/" className="NewPassword-form">
          <label for="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="input input-password"
          />

          <label for="new-password" className="label">
            Re-enter password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="********"
            className="input input-password"
          />
          <input
            type="submit"
            name=""
            id=""
            value="Confirm"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
