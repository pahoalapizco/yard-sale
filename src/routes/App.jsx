import React from "react";
import {
  BrowserRouter, // Encapsula la aplicación
  Routes,
  Route,
} from "react-router-dom";
// Containers
import Layout from "../containers/Layout.jsx";
import MyOrder from "./../containers/MyOrder";
import Cart from "./../containers/Cart";

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

// context
import AppContext from "@context/AppContext.js";

// hooks
import useInitialState from "@hooks/useInitialState.js";

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/password" element={<NewPassword />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/my-order" element={<MyOrder />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
