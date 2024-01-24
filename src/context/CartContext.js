import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducer/cartReducer";

const initialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (product) => {
    const updatedCartList = state.cartList.concat(product);
    updateTotal(updatedCartList);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const removeFromCart = (product) => {
    console.log("vachesanenu");
    const updatedCartList = state.cartList.filter(
      (current) => current.id !== product.id
    );
    updateTotal(updatedCartList);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const updateTotal = (product) => {
    let total = 0;
    product.forEach((productItem) => (total = total + productItem.price));
    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        cartTotal: total,
      },
    });
  };

  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
    updateTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
