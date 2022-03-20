import React from "react";

// Components
import Logo from "@components/Logo.jsx";

// Styles
// import "@styles/styles.scss";
import "@styles/Login.scss";

const Login = () => {
  return (
    <div className="Login">
      <div className="Login-container">
        <Logo />

        <>
          <form action="/" className="form">
            <label for="email" className="label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              className="input input-email"
            />

            <label for="new-password" className="label">
              Password
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
              value="Login"
              className="primary-button login-button"
            />
            <a href="/"> Forgot my password </a>
          </form>
          <button className="secondary-button singup-button"> Sing up </button>
        </>
      </div>
    </div>
  );
};

export default Login;
