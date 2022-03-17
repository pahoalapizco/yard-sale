import React from "react";
import {
  BrowserRouter, // Encapsula la aplicación
  Routes,
  Route,
} from "react-router-dom";
// Containers
import Layout from "../containers/Layout.jsx";
import Login from "../containers/Login.jsx";
import RecoveryPassword from "../containers/RecoveryPassword.jsx";
import NewPassword from "../containers/NewPassword.jsx";
import Products from '../containers/Products.jsx';
import MyOrder from './../containers/MyOrder';

// Pages
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";

// Styles
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password" element={<NewPassword />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="/products" element={<Products />} />
          <Route path="/my-order" element={<MyOrder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
