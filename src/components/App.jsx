import React from "react";

// Containers
import Layout from "../containers/Layout.jsx";
import Login from "../containers/Login.jsx";
import RecoveryPassword from "../containers/RecoveryPassword.jsx";
import NewPassword from "../containers/NewPassword.jsx";

// Styles
import '../styles/global.css';

const App = () => {
  return (
    <Layout>
      <Login />
      <NewPassword />
      <RecoveryPassword />
    </Layout>
  );
};

export default App;
