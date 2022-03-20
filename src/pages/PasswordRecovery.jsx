import React from 'react'

// Components
import Logo from '@components/Logo.jsx';

import '@styles/PasswordRecovery.scss';

const PasswordRecovery = () => {
  return (
    <div className="PasswordRecovery">
      <div className="PasswordRecovery-container">
        <Logo />
        <h1 className="PasswordRecovery-title">Password recovery</h1>
        <p className="PasswordRecovery-subtitle">Inform the email address used to create your account</p>
        <>
          <form action="/" className="PasswordRecovery-form">
            <label for="email" className="label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              className="input input-email"
            />
            <input
              type="submit"
              name=""
              id=""
              value="Submit"
              className="primary-button login-button"
            />
            <a href="/"> Back to log in </a>
          </form>
        </>
      </div>
    </div>
  )
}

export default PasswordRecovery