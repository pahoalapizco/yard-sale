import React from "react";

// Styles
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        <h1 className="title">My account</h1>
        <form action="/" className="CreateAccount-form">
          <div>
            <label for="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="your name"
              className="input input-name"
            />

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
          </div>
          <input
            type="submit"
            name=""
            id=""
            value="Create"
            className="primary-button create-button"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
