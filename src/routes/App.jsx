import React from "react";
import {
  BrowserRouter, // Encapsula la aplicación
  Routes,
  Route,
} from "react-router-dom";
// Containers
import Layout from "../containers/Layout.jsx";
import Products from '../containers/Products.jsx';
import MyOrder from './../containers/MyOrder';
import Cart from './../containers/Cart';

// Pages
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/Login.jsx";
import CreateAccount from "../pages/CreateAccount.jsx";
import MyAccount from "../pages/MyAccount.jsx";
import NewPassword from "../pages/NewPassword.jsx";
import SendEmail from "../pages/SendEmail.jsx";
import PasswordRecovery from "../pages/PasswordRecovery.jsx";
import Orders from "../pages/Orders.jsx";

// Styles
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/password" element={<NewPassword />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route path="/send-email" element={<SendEmail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/my-order" element={<MyOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
