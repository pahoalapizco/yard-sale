import React from "react";
import {
  BrowserRouter, // Encapsula la aplicación
  Routes,
  Route,
} from "react-router-dom";
// Containers
import Layout from "../containers/Layout.jsx";
import RecoveryPassword from "../containers/RecoveryPassword.jsx";
import NewPassword from "../containers/NewPassword.jsx";
import Products from '../containers/Products.jsx';
import MyOrder from './../containers/MyOrder';
import Cart from './../containers/Cart';
import MyOrders from "../containers/MyOrders.jsx";
import Edit from "../containers/Edit.jsx";

// Pages
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/Login.jsx";
import CreateAccount from "../pages/CreateAccount.jsx";

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
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="/products" element={<Products />} />
          <Route path="/my-order" element={<MyOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
