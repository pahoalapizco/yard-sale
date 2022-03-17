import React from 'react'

// Styles
import '../styles/styles.scss';
import '../styles/Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="form-container_login">
        <img src="../assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />

        <div>
            <form action="/" className="form">
              <label for="email" className="label">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="example@example.com"
                className="input input-email"
              />

              <label for="new-password" className="label">Password</label>
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
        </div>
      </div>
    </div>
  )
}

export default Login