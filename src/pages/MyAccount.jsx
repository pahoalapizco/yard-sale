import React from "react";

// Styles
import "@styles/MyAccount.scss";

const MyAccount = () => {
  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        <h1 className="title title_left">My account</h1>
        <form action="/" className="MyAccount-form">
            <div>
              <label for="name" className="label">
                Name
              </label>
              <p className="value"> My name </p>

              <label for="email" className="label">
                Email address
              </label>
              <p className="value"> email@gmail.com</p>

              <label for="new-password" className="label">
                Password
              </label>
              <p className="value"> *********** </p>
            </div>
            <input
              type="submit"
              name=""
              id=""
              value="Edit"
              className="secondary-button edit-button"
            />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
