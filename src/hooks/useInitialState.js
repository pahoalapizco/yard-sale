import { useState } from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [toggleOrders, setToggleOrders] = useState(false);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((item, index) => index !== indexValue)
    })
  }

  const openCloseCart = () => {
    setToggleOrders(!toggleOrders);
  }

  return { state, addToCart, removeFromCart, toggleOrders, openCloseCart };
};

export default useInitialState;
