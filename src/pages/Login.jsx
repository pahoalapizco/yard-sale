import React, { useRef } from "react";

// Components
import Logo from "@components/Logo.jsx";

// Styles
// import "@styles/styles.scss";
import "@styles/Login.scss";

const Login = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log("🚀 ~ file: Login.jsx ~ line 19 ~ handleSubmit ~ data", data);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <Logo />
        <>
          <form action="/" className="form" ref={formRef}>
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              className="input input-email"
            />

            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className="input input-password"
            />
            <button
              type="submit"
              className="primary-button login-button"
              onClick={handleSubmit}
            >
              Log in
            </button>
            <a href="/"> Forgot my password </a>
          </form>
          <button className="secondary-button singup-button">Sing up</button>
        </>
      </div>
    </div>
  );
};

export default Login;
