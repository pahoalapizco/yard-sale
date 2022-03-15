import React from "react";

// Containers
import Layout from "../containers/Layout.jsx";
import Login from "../containers/Login.jsx";

// Styles
import '../styles/global.css';

const App = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default App;
