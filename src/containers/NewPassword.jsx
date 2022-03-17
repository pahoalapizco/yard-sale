import React from 'react'

// styles
import '../styles/styles.scss';

const NewPassword = () => {
  return (
    <div className="login">
      <div className="form-container_pass">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>

        <form action="/" className="form">
          <label for="password" className="label">Password</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="input input-password"
          />

          <label for="new-password" className="label">Re-enter password</label>
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
  )
}

export default NewPassword