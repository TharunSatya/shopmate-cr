import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";
export const ProductCard = (props) => {
  const { addToCart, cartList, removeFromCart } = useCart();
  const { productsList } = props;
  const { name, price, image, id } = productsList;
  const [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    const productInCart = cartList.find((cartItem) => cartItem.id === id);
    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);

  const handleAdd = () => {
    console.log("clicked now");
    addToCart(productsList);
    console.log(cartList);
  };

  return (
    <div className="productCard">
      <img src={image} alt="" />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button
            onClick={() => removeFromCart(productsList)}
           id="remove"
          >
            Remove
          </button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )}
      </div>
    </div>
  );
};
