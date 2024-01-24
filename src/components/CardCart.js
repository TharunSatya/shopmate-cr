import React from "react";
import { useCart } from "../context/CartContext";
import "./CardCart.css";

export const CardCart = (props) => {
  const { removeFromCart} = useCart();
  const { productList } = props;
  const { name, price, image } = productList;

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button className="remove" onClick={()=>removeFromCart(productList)}>Remove</button>
    </div>
  );
};
